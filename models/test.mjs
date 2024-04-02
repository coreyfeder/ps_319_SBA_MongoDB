/*
One version: https://mongoosejs.com/docs/guide.html#definition
```
import mongoose from "mongoose";
const { Schema } = mongoose;
const blogSchema = new Schema({})
```

Another version: (maybe from slides?)
```
import mongoose from "mongoose";
const mySchema = new mongoose.Schema({})
```

And yet another:
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```
 */


import mongoose from "mongoose";
import { Int32 } from "../node_modules/mongodb/mongodb";

// Mongoose will add the _id property to your schemas by default.

const testSchema = new mongoose.Schema({
    name: String,
    bytes: Int32,
    creation: Date,
})

/*
customerSchema.methods.future = function () {
    return mongoose
        .model("Test")
        .find({ creation: { $gt: new Date() } })
        // .trim()
        ;
  };
 */

// Compile the schema into a model and export it.
export default mongoose.model("Test", testSchema, "test");
/*
const Kitten = mongoose.model('Kitten', kittySchema);
const Test = mongoose.model('Test', testSchema);
export default Test
 */
