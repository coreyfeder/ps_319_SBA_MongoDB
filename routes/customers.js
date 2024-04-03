// TODO: MONGOIZE
import customer from "../models/customer.mjs";

export function getCustomerList(req, res) {
    let customerList = customer.find().projection(exclude { '_id' })
    const customerList = await customer.find();
    console.log(customerList);//
    res.json(customerList);
}

export function getCustomerById(req, res) {
    let foundCustomer = customer.findById(req.params.customer_id);
    if (foundCustomer) {
        res.json(foundCustomer);
    } else {
        res.status(404).json({ error: `Resource not found.` });
    }
}

export function postNewCustomer(newCustomer) {
    let maxCurrentCustomerId = data.customers[data.customers.length - 1].customer_id;
    newCustomer.customer_id = maxCurrentCustomerId + 1;
    data.customers.push(newCustomer);
    saveData();
    return newCustomer;
}
