import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        order: {
            type: String,
            trim: true,
            required: true,
            index: text,
            match: /^[[:print:]]+$/,
            message: "Just basic latin characters, please.",
        },
    },
    { collection: 'orders'},
    { minimize: false },
)

export default mongoose.model(name="Order", schema=orderSchema, collection="orders");
