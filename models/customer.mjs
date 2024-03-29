import mongoose from "mongoose";

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
        match: /^[[:alnum:]]+$/,
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
})


customerSchema.methods.phoneLast4 = function (last4) {
    return mongoose
      .model("Customer")
      .find({ phone: /${last4}/ })  // TODO: figure out inserting variable into regex
      .trim();
  };


export default mongoose.model("Customer", customerSchema);
