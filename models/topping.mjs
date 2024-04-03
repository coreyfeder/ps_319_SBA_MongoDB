import mongoose from "mongoose";

const toppingSchema = new mongoose.Schema(
    {
        topping: {
            type: String,
            trim: true,
            required: true,
            index: text,
            maxLength: 36,
            match: /^[[:print:]]+$/,
            message: "Just basic latin characters, please.",
        },
        premium: Boolean,
        vegetarian: Boolean,
        vegan: Boolean,
        "consumable outside Mario World": Boolean,
    },
    { collection: 'toppings' },
    { minimize: false },
)

export default mongoose.model(name="Topping", schema=toppingSchema, collection="toppings");
