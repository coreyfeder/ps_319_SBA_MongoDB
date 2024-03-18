const express = require("express")
const fs = require('fs')
const { exit } = require("process")

const app = express()
const router = express.Router()
app.use('/', router)  // mount the router on the app


// this endpoint
const protocol = "http"
const host = "localhost"
const port = 3000  // try 5000 if any troubles
const prefix = "api"
const baseurl = `${protocol}://${host}:${port}`
const url = `${baseurl}/${prefix}`


// CONNECTION TO DB
// No database for this. Just some flat files.
// Make that one flat file. Dataset is ver smol.
// No sync!! Do NOT run multiple instances!!
const dataFilename = "APIzza.json"
const serverPath = "/Users/corey/perscholas/class/SBA318_express_server_app/SBA318_express_server_app"
const dataFile = `${serverPath}/${dataFilename}`

// SBA Note:
// Not going to deal with sync or race conditions or missing files or any such for this exercise.

let dataHolder
try {
    dataHolder = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    console.log("Data loaded.");
    // console.debug(dataHolder);
} catch (err) {
    console.error("Data file failed to load!")
    console.error(err);
    process.exit(1);
}
const data = dataHolder

// MIDDLEWARE

app.use(express.json())

function saveData() {
    try {
        fs.writeFileSync(dataFile, JSON.stringify(data));
        console.log("Data saved.");
    } catch (err) {
        console.error("Data failed to save!")
        console.error(err);
    }
}

function sanitizeString(text) {
    // Sanitization function from mwag (https://stackoverflow.com/users/3160967/mwag) at StackOverflow, with edits
    // https://stackoverflow.com/questions/24229262/match-non-printable-non-ascii-characters-and-remove-from-text/71459309#71459309
    // strip control chars, trim, normalize whitespace
    text = String(text).trim();
    text = text.replace(/\p{C}/gu, '');
    // overkill: normalize whitespace and strip newlines
    text = text.replace(/\s/gu, ' ');
    text = text.replace(/[\n\r]+/g, ' ');
    text = text.replace(/[\p{Zl}]+/gu, ' ');
    text = text.replace(/[\p{Zp}]+/gu, ' ');
    text = text.replace(/[\p{Zs}]+/gu, ' ');
    text = text.replace(/\s/gu, ' ');

    return text;
}

function sanitizeObject(uncleanObject, validProperties){
    let cleanObject = {}
    for (let property of validProperties) {
        switch(typeof uncleanObject.property) {
            case "number":
            case "boolean":
                cleanObject.property = uncleanObject.property
                break
            case "string":
                cleanObject.property = sanitizeString(uncleanObject.property)
                break;
            case "object":
                cleanObject.property = 
                    JSON.parse(
                    sanitizeString(
                    JSON.stringify(
                    uncleanObject.property
                )));
                break;
            default:
                cleanObject.property = null;
        }
    }
    return cleanObject
}

function sanitizeCustomer(potentialCustomer) {
    let newCustomer = sanitizeObject(potentialCustomer, ["name","phone","address","delivery_notes"]);
    if (newCustomer == {}) {
        return {"error": "Invalid customer data"}
    } else if (!newCustomer.name || !newCustomer.phone || !newCustomer.address) {
        return {"error": "Missing required fields for new customer"}
    } else {
        newCustomer.customer_id = data.customers[-1].customer_id + 1
        data.customers.push(newCustomer)
        saveData();
    }
}


// ROUTER

// a middleware function with no mount path => code executed for every request
router.use((req, res, next) => {
    console.log([
            Date.now(), 
            'req',
            req.method, 
            req.path,
        ].join(' : '))
    next()
    /*  
        Can I make a post-processing log entry here?
        will control come back to this process after calling `next()`?
     */ 
    /* 
    Unless debugging or saving to ephemeral storage, don't be quick to log full payloads.
    And don't assume they'll be easy logs, because javascript hates humans:
        - res.json()                    it'll likely just be "[object Object]"
        - JSON.stringify(res.json())    it'll likely be enormous
        - Util.inspect(res.json())      maybe tweak the paramters to limit line length, depth, or breadh
     */
})


// ROUTES

// customers
//  > GET == list customers
app.route('/customers')
    .all((req, res, next) => {
        console.debug("endpoint: /customers")
        next()
    })
    .get((req, res, next) => {
        res.json(data.customers)
    })

// customer/:customer_id
//  > GET = list customer
app.route('/customer/:customer_id')
    .all((req, res, next) => {
        console.debug("endpoint: /customer/:customer_id")
        next()
    })
    .get((req, res, next) => {
        let foundCustomer = data.customers.find((item) => item.customer_id == req.params.customer_id)
        if (foundCustomer) {
            res.json(foundCustomer)
        } else {
            res.status(404).json({ error: `Resource not found.` })
        }
    })

// customer
//  > POST = add new customer
app.route('/customer')
    .all((req, res, next) => {
        console.debug("endpoint: /customer")
        next()
    })
    .post((req, res, next) => {
        let newCustomerJSON = req.json()
        if (valdateCustomer(newCustomerJSON)) {
            // TODO: check that customer doesn't already exist. NBD if they do, but to be tidy.
            let newCustomer = sanitizeCustomer(newCustomerJSON)
            addNewCustomer(newCustomer)
        }
    })

// toppings
//  > GET = list toppings
app.route('/toppings')
    .all((req, res, next) => {
        console.debug("endpoint: /toppings")
        next()
    })
    .get((req, res, next) => {
        res.json(data.toppings)
    })

// topping
//  > POST = add a new topping
app.route('/topping')
    .all((req, res, next) => {
        console.debug("endpoint: /topping")
        next()
    })
    .post((req, res, next) => {
        let newTopping = sanitizeString(req.json())
        if (newTopping) {
            data.toppings.push(newTopping)
            saveData()
        }
    })


// orders
//  > GET = list orders
app.route('/toppings')
    .all((req, res, next) => {
        console.debug("endpoint: /orders")
        next()
    })
    .get((req, res, next) => {
        res.json(data.orders)
    })

// order/:order_id
//  > GET = list specified order
app.route('/order/:order_id')
    .all((req, res, next) => {
        console.debug("endpoint: /order/:order_id")
        next()
    })
    .get((req, res, next) => {
        let foundOrder = data.orders.find((item) => item.order_id == req.params.order_id)
        if (foundOrder) {
            res.json(foundOrder)
        } else {
            res.status(404).json({ error: `Resource not found.` })
        }
    })

// order
//  > POST = add a new order
app.route('/order')
    .all((req, res, next) => {
        console.debug("endpoint: /order")
        next()
    })
    .post((req, res, next) => {
        let newOrder = sanitizeString(req.json())
        if (newOrder) {
            data.order.push(newTopping)
            saveData()
        }
    })


// ERROR HANDLING / endware
//   If a call made it this far, something was wrong with it.

// catch any request sent without the prefix
app.all("/", (req, res) => {
    res.status(403).json({ error: `Welcome to APIzza! Public endpoints are available at: ${url}` })
});

// any other resource request
app.all((req, res) => {
    console.error(err.stack);
    res.status(404).json({ error: `Resource not found.` });
})

// any other...other.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(404).json({ error: `Resource not found.` });
})


// GO / LISTEN

app.listen(port, () => {
    console.log(`APIzza server listening at:  ${url}`);
    console.debug(`  Data loaded? ${Boolean(data)}`)
});
