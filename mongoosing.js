// import 'dotenv/config'  // ES6  // why doesn't this work? am I not using ES6?
require('dotenv').config()
console.log(process.env)  // check!

const mongoose = require("mongoose");
mongoose.set('autoIndex', false);
mongoose.set('debug', true);  // all executed methods log output to console
mongoose.set('debug', { shell: true });  // get mongodb-shell friendly output (ISODate)
mongoose.set('sanitizeFilter', true);  // apply `sanitizeFilter()`: https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.sanitizeFilter()



// mongoose docs say:
// mongoose.connect(`mongodb://${MDB_USERNAME}:${MDB_APIKEY}@${MDB_HOST}:${MDB_PORT}/${MDB_DATABASE}?options...`);

// slides say:
// await mongoose.connect(`mongodb://${SOME_CONNECTION_STRING}/${MDB_DATABASE}`)

// console.log(`mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_APIKEY}@${process.env.MDB_APPID}.${process.env.MDB_SERVER}/${process.env.MDB_DATABASE}`);

// TODO: no need to have this as a variable outside construction & debugging. construct when sending as arg
let connectString = `mongodb+srv://` +                                          // protocol. is the "+srv" necessary?
                    `${encodeURIComponent(process.env.MDB_USERNAME)}` +         // auth: username
                    `:${encodeURIComponent(process.env.MDB_APIKEY)}` +          // auth: pw, auth token, etc.
                    `@${process.env.MDB_APPID}.${process.env.MDB_SERVER}` +     // full server name
                    `/${process.env.MDB_DATABASE}`                              // any "path"
/*
    NOTE
    If the username or password includes the following characters:
        $ : / ? # [ ] @
    those characters must be converted using percent encoding.
    (https://www.mongodb.com/docs/manual/reference/connection-string/#authentication-options)
 */
console.log(connectString);

mongoose.connect(connectString);
/*
// Create a new Mongoose instance with its own `connect()`, `set()`, `model()`, etc.
const m = new mongoose.Mongoose();
// I assume this is instead of `mongoose.connect(connectString)`?
// Maybe to connect to different DBs at once? Or maybe different collections at once?
 */

/*
Better, more modern way to connect?
createConnection()
https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.createConnection()
Creates a Connection instance.
Each connection instance maps to a single database. This method is helpful when managing multiple db connections.
Options passed take precedence over options included in connection strings.
(Possibly unnecessary unless doing async or going for speed?)

Example:
// with mongodb:// URI
db = mongoose.createConnection('mongodb://user:pass@127.0.0.1:port/database');
 */

db = mongoose.createConnection(connectString);

console.log(mongoose.isValidObjectId('6603192c647ce733c23d27f3'))  // true!
// console.log(m.isValidObjectId('6603192c647ce733c23d27f3'))  // true!
// console.log('Wait...those are both true?')
// console.log(db.isValidObjectId('6603192c647ce733c23d27f3'))  // not valid
