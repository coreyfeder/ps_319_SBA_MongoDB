/*
Version: https://mongoosejs.com/docs/guide.html#definition
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
 */

import mongoose from "mongoose";

// Mongoose will add the _id property to your schemas by default.

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        match: /^[[:print:]]+$/,
        message: "Just your name in basic latin characters, please. Don't need a PNG of your face or anything.",
    },
    phone: {
        type: String,
        index: text,
        trim: true,
        required: true,
        minLength: 7,
        match: /^[[:alnum:]][[:alnum:] ]+$/,
        message: "How...how do I put that into a phone?",
    },
    address: {
        type: String,
        trim: true,
        match: /^[[:print:]]+$/,
        message: "If your address legitimately contains control characters... you're out of our delivery range.",
        required: true,
    },
    delivery_notes: {
        type: String,
        trim: true,
        match: /^[[:print:]]+$/,
        message: "invalid characters",
        required: false,
    },
    },
    // { collection: 'customers' },  // defaults to plural of model name
    { minimize: false },
)

/*
customerSchema.methods.phoneLast4 = function (last4) {
    return mongoose
      .model("Customer")
      .find({ phone: /${last4}/ })  // TODO: figure out inserting variable into regex
      .trim();
  };
 */

// Compile the schema into a model and export it.
export default mongoose.model("Customer", customerSchema);
