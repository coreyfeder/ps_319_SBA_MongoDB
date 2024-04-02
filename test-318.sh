# Testing

# try:
# - req.json()
# - JSON.stringify(req.json())
# - Util.inspect(req.json())


# curl "http://localhost:3000/test"
# curl "http://localhost:3000/test/qwerty"
# curl "http://localhost:3000/test" --json '{"some": "data"}'

port=5050
newCustomer='{"name":"Evil Mario","phone":"987-654-3210","address":"414 Bizarro St, Apt £","delivery_notes":"burn it"}'
newToppings='["special mushrooms","oreos"]'
newOrder='{
    "customer_id": 1,
    "pizzas": [
        {
            "size": "L",
            "toppings": [],
            "notes": "well-done, please."
        },
        {
            "size": "XL",
            "toppings": ["pepperoni", "coins"],
            "notes": ""
        }
    ]
}'


print "Errors"
curl "http://localhost:${port}" ; print
curl "http://localhost:${port}/" ; print
curl "http://localhost:${port}/qwertyface" ; print


print "\n\nCUSTOMERS"
print "\nAll customers"
curl "http://localhost:${port}/customers/" ;
curl "http://localhost:${port}/customers/" | jq ;

print "\nOne customer"
curl "http://localhost:${port}/customer/1" ;
curl "http://localhost:${port}/customer/1" | jq ;

print "\nAdd customer"
curl "http://localhost:${port}/customers/" | jq ; print
curl "http://localhost:${port}/customer/" --json "$newCustomer" ; print
curl "http://localhost:${port}/customers/" | jq

print "Errors"
curl "http://localhost:${port}/customers/qwertyface"
curl "http://localhost:${port}/customers/1"
curl "http://localhost:${port}/customers/" --json "$newCustomer" ; print
curl -X DELETE "http://localhost:${port}/customer/1"



print "\n\nTOPPINGS"
print "\nAll toppings"
curl "http://localhost:${port}/toppings/"
print "\nAdd new toppings"
curl "http://localhost:${port}/toppings/" --json "$newToppings"
print "\nAll toppings"
curl "http://localhost:${port}/toppings/"



print "\n\nORDERS"
print "\nAll orders"
curl "http://localhost:${port}/orders/"
print "\nAdd new order"
curl "http://localhost:${port}/order/" --json "$newOrder"
print "\nAll orders"
curl "http://localhost:${port}/orders/"
print "\nProbably this order"
curl "http://localhost:${port}/order/1"
print "\nDelete the order"
curl -X DELETE "http://localhost:${port}/order/1"
curl "http://localhost:${port}/orders/1"
curl "http://localhost:${port}/orders/"
