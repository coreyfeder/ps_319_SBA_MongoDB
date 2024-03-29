// import 'dotenv/config'  // ES6  // why doesn't this work? am I not using ES6?
require('dotenv').config()
console.log(process.env)  // check!
const mongoose = require("mongoose");
mongoose.set('autoIndex', false);

// mongoose docs say:
// mongoose.connect(`mongodb://${MDB_USERNAME}:${MDB_APIKEY}@${MDB_HOST}:${MDB_PORT}/${MDB_DATABASE}?options...`);

// slides say:
// await mongoose.connect(`mongodb://${SOME_CONNECTION_STRING}/${MDB_DATABASE}`)

// console.log(`mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_APIKEY}@${process.env.MDB_APPID}.${process.env.MDB_SERVER}/${process.env.MDB_DATABASE}`);

mongoose.connect(`mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_APIKEY}@${process.env.MDB_APPID}.${process.env.MDB_SERVER}/${process.env.MDB_DATABASE}`);

// Create a new Mongoose instance with its own `connect()`, `set()`, `model()`, etc.
const m = new mongoose.Mongoose();

mongoose.isValidObjectId('6603192c647ce733c23d27f3')
