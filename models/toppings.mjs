import mongoose from "mongoose";

"topping": "goomba_bacon",
"premium": false,
"vegetarian": false,
"vegan": false,
"consumable outside Mario World": true




const toppingSchema = new mongoose.Schema(
    {
        topping: {
            type: String,
            trim: true,
            required: true,
            index: text,
            match: /^[[:print:]]+$/,
            message: "Just your name in basic latin characters, please. Don't need a PNG of your face or anything.",
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
