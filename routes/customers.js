// TODO: MONGOIZE

function getCustomerList(req, res) {
    res.json(data.customers);
}

function getCustomerById(req, res) {
    let foundCustomer = findCustomerById(req.params.customer_id);
    if (foundCustomer) {
        res.json(foundCustomer);
    } else {
        res.status(404).json({ error: `Resource not found.` });
    }
}

function postNewCustomer(newCustomer) {
    let maxCurrentCustomerId = data.customers[data.customers.length - 1].customer_id;
    newCustomer.customer_id = maxCurrentCustomerId + 1;
    data.customers.push(newCustomer);
    saveData();
    return newCustomer;
}
