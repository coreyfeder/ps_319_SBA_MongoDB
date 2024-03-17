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

try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    console.log("Data loaded.");
    console.debug(data);
} catch (err) {
    console.error("Data file failed to load!")
    console.error(err);
    process.exit(1);
}


// MIDDLEWARE

app.use(express.json())

// Sanitization function from mwag (https://stackoverflow.com/users/3160967/mwag) at StackOverflow, with edits
// https://stackoverflow.com/questions/24229262/match-non-printable-non-ascii-characters-and-remove-from-text/71459309#71459309
function sanitizeString(text) {
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
            
        }
        
        if (typeof uncleanObject.property in ['number','undefined']) {
            cleanObject.property = uncleanObject.property
        } else if (typeof uncleanObject.property in ['string','object']) {
            cleanObject.property = sanitizeString(uncleanObject.property)
        } else {
            cleanObject.property = null
        }
    }
}

function sanitizeCustomer(potentialCustomer) {
    const clean = (text) => {
        result = string.trim().replace(/[^ -~]+/g, "");
    }
    const validChars = /\w/u;
    const invalidChars = /^\w/u;
    let newCustomer = {}
    newCustomer.name = 
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

app.route('/customers')
    .all((req, res, next) => {
        // code in this section will be executed 
        // no matter which HTTP verb was used
        console.debug("endpoint: /customers")
        next()
    })
    .get((req, res, next) => {
        res.json(data.customers)
    })
    .post((req, res, next) => {
        let newCustomerJSON = req.json()
        if (valdateCustomer(newCustomerJSON)) {
            let newCustomer = sanitizeCustomer(newCustomerJSON)
            addNewCustomer(newCustomerJSON)
        }
    })
    /* 
    .patch((req, res, next) => {
        // PATCH = update part of an existing thing
    })
    .put((req, res, next) => {
        // PUT = replace an existing thing
    })
     */
    .delete((req, res, next) => {
        // DELETE = remove some data
    })


// ERROR HANDLING / endware
//   If a call made it this far, something was wrong with it.

// catch any request sent without the prefix
app.all("/", (req, res) => {
    res.status(403).json({ error: `Public API endpoints are available at: ${url}` })
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
    console.log(`Server listening at:  ${url}`);
});
