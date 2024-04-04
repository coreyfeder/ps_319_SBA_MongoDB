
function saveData() {
    // TODO
    return
}


function sanitizeString(text) {
    // Sanitization function from mwag (https://stackoverflow.com/users/3160967/mwag) at StackOverflow, with edits
    // https://stackoverflow.com/questions/24229262/match-non-printable-non-ascii-characters-and-remove-from-text/71459309#71459309
    // strip control chars, trim, normalize whitespace
    text = String(text).trim();
    text = text.replace(/\p{C}/gu, "");
    // overkill: normalize whitespace and strip newlines
    text = text.replace(/\s/gu, " ");
    text = text.replace(/[\n\r]+/g, " ");
    text = text.replace(/[\p{Zl}]+/gu, " ");
    text = text.replace(/[\p{Zp}]+/gu, " ");
    text = text.replace(/[\p{Zs}]+/gu, " ");
    text = text.replace(/\s/gu, " ");

    return text;
}

function sanitizeObject(uncleanObject, validProperties) {
    let cleanObject = {};
    for (let property of validProperties) {
        switch (typeof uncleanObject[property]) {
            case "number":
            case "boolean":
                cleanObject[property] = uncleanObject[property];
                break;
            case "string":
                cleanObject[property] = sanitizeString(uncleanObject[property]);
                break;
            case "object":
                cleanObject[property] = JSON.parse(
                    JSON.stringify(sanitizeString(uncleanObject[property])),
                );
                break;
            default:
                cleanObject[property] = null;
        }
    }
    return cleanObject;
}

function sanitizeCustomer(potentialCustomer) {
    let result = {success: null, error: null}
    let newCustomer = sanitizeObject(potentialCustomer, [
        "name",
        "phone",
        "address",
        "delivery_notes",
    ]);
    if (newCustomer == {}) {
        result.error = "Invalid customer data"
        return result
    }
    let missingFields = ""
    if (!newCustomer.name) { missingFields += ", Name"; }
    if (!newCustomer.phone) { missingFields += ", Phone"; }
    if (!newCustomer.address) { missingFields += ", Address"; }
    missingFields = missingFields.slice(2)
    if (missingFields) {
        result.error = `Missing required fields for new customer: ${missingFields}`
        return result
    } else {
        result.success = newCustomer
        return result;
    }
}

function sanitizeOrder(potentialOrder) {
    console.log("potentialOrder")
    console.log(potentialOrder)
    let result = {success: null, error: null}
    if (potentialOrder == {}) {
        result.error = "Invalid order data"
    } else if (!potentialOrder.customer_id) {
        result.error = "Missing required fields for new order"
    } else {
        // no other sanitization. the customer is always right!
        result.success = potentialOrder;
    }
    return result
}

function addNewOrder(newOrder) {
    // keeping order number unique across launches
    console.log(`adding new order`)
    console.log(`current newOrder: ${newOrder}`)
    console.log(`current order_count: ${data.orders_next_id}`)
    newOrder.order_id = data.orders_next_id++;  // assign first, then increment
    data.orders.push(newOrder);
    saveData();
    console.log(`new newOrder: ${newOrder}`)
    console.log(`new order_count: ${data.orders_next_id}`)
    return newOrder;
}

function getCustomerById(customer_id) {
    return data.customers.find((item) => item.customer_id == customer_id)
}

function findOrderById(order_id) {
    return data.orders.find((item) => item.order_id == order_id)
}

function findOrderIndexById(order_id) {
    return data.orders.findIndex((item) => item.order_id == order_id)
}
