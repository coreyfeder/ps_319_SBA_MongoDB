
// use enum for sizes
// enum: { values: ['Coffee', 'Tea'], message: '{VALUE} is not supported' }

import mongoose from "mongoose";
import toppings from "./toppings.mjs";

const pizzaSchema = new mongoose.Schema(
    {
        "order_id": ObjectId,
        "size": "L",
        "toppings": [toppings],
        "notes": String
    }
)

export default mongoose.model(name="Pizza", schema=pizzaSchema, collection="orders");
