app.route("/toppings")
function getToppings(req, res) {
    res.json(data.toppings);
}

function postNewTopping(req, res) {
    let newToppings = req.body;
    if (Array.isArray(newToppings)) {
        for (let topping of newToppings) {
            if (typeof topping == "string") {
                let newTopping = sanitizeString(topping);
                if (!data.toppings.includes(newTopping)) {
                    data.toppings.push(newTopping);
                    console.log(`Adding topping: ${newTopping}`);
                }
            }
        }
    }
    saveData()
    res.json(data.toppings);
}
