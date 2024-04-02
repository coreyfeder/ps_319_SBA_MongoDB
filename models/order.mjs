import mongoose from "mongoose";
import toppings from "./toppings.mjs";
import { ObjectId } from "../node_modules/mongodb/mongodb";


const pizzaSchema = new mongoose.Schema(
    {
        "order_id": ObjectId,
        "size": {
            type: String,
            enum: {
                values: [
                    'XXL',  // basically, an edible blanket
                    'XL',
                    'L',    // feeds 1-4
                    'M',
                    'S',    // feeds one
                    'P',    // for grazers and self-flagellation
                    '0',    // a single mini-bagel. costs same as M.
                ],
                message: '{VALUE} is not a valid size',
            },
            default: 'L',
        },
        "cut": {
            type: String,
            enum: {
                values: [
                    'wedges',   // 8 per pie. Normal.
                    'slim',     // 16 per pie. For sharing and stuff. I guess
                    'square',   // YOU MONSTER.
                    'uncut',    // ...respect.
                ],
                message: '{VALUE} is not a valid cut pattern',
            },
            default: 'wedges',
        },
        "toppings": [toppings],  // referenced (top-level) documents
        "pie_notes": {
            type: String,
            maxLength: 314,  // a nerd is me.
        },
    }
)


const orderSchema = new mongoose.Schema(
    {
        "customer_id": ObjectId,
        "pizzas": [pizzaSchema],  // array of subdocuments
        "order_notes": {
            type: String,
            maxLength: 300,
        },
    }
)

export default mongoose.model(name="Order", schema=orderSchema, collection="orders");
