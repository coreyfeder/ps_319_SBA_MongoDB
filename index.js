const express = require("express");
// const bodyParser = require("body-parser")
// const util = require("node:util");
// const { exit } = require("process");
// const mongoose = require("mongoose");
const customers = require('./routes/customers.js');

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded((extended = true)));
app.use("/", router);


// this endpoint
const protocol = "http";
const host = "localhost";
const port = 5555;
const url = `${protocol}://${host}:${port}`;


/*
    Removed data read from flat file.
    TODO:
    Replace with data import via Mongoose.
 */


// MIDDLEWARE

// ROUTER

// use a router to log the transactions
router.use((req, res, next) => {
    // console.log(req.body)
    console.log(
        [
            Date.now(),
            "req",
            req.method,
            req.path,
            // JSON.stringify(req.body),
        ].join(" : "),
    );
    console.log(req.body);
    next();
});

// ROUTES

/*
app.route("/customers").get(getCustomerById)
app.route("/customers").post(postNewCustomer)
app.route("/customers/:customer_id").get(getCustomerList)

app.route("/toppings").get(getToppings)
app.route("/toppings").post(postNewTopping)

app.route("/orders").get(getOrdersList);
app.route("/orders/:order_id").get(getOrderById)
app.route("/orders/:order_id").delete(deleteOrderById)
app.route("/orders").post(postNewOrder);
 */

// ERROR HANDLING / endware
//   If a call made it this far, something was wrong with it.

app.all("/*", (req, res) => {
    res.status(403).json({
        error: `Welcome to APIzza! Public endpoints are available at: ${url}`,
    });
});

// any other resource request
app.use((req, res, next) => {
    console.log(
        [
            Date.now(),
            "404",
            req.method,
            req.path,
            // JSON.stringify(req.body),
        ].join(" : "),
    );
    res.status(404).json({error: "Resource not found."});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(404).json({error: `Error accessing resource. ${err}`});
});


// set it loose!

app.listen(port, () => {
    console.log(`APIzza server listening at:  ${url}`);
});
