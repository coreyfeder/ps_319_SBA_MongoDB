// TODO: MONGOIZE

function getOrdersList(req, res); {
    console.debug("endpoint: /orders");
    console.debug(data.orders);
    res.send(data.orders);
}

function getOrderById(req, res) {
    let foundOrder = findOrderById(req.params.order_id);
    if (foundOrder) {
        res.json(foundOrder);
    } else {
        res.status(404).json({ error: `Resource not found.` });
    }
}

function deleteOrderById(req, res) {
    let foundOrderIndex = findOrderIndexById(req.params.order_id);
    if (foundOrderIndex >= 0) {
        let removed = data.orders.splice(foundOrderIndex,1);
        saveData()
        res.json(removed)
    } else {
        res.status(404).json({ error: `Resource not found.` });
    }
}

function postOrder(req, res) {
    let newOrder = sanitizeOrder(req.body);
    console.log("newOrder")
    console.log(newOrder)
    // TODO: validate the order
    //  - customer_id must exist
    //  - size must be valid
    //  - toppings must exist (or maybe be automatically added?)
    if (newOrder.success) {
        let confirmation = addNewOrder(newOrder.success)
        res.json(confirmation)
    } else {
        res.status(403).json({error: newOrder.error});
    }
}
