# Testing

# try:
# - req.json()
# - JSON.stringify(req.json())
# - Util.inspect(req.json())


curl "http://localhost:3000/test"
curl "http://localhost:3000/test/qwerty"
curl "http://localhost:3000/test" -d '{"some": "data"}'


curl "http://localhost:3000/customers/"

curl "http://localhost:3000/customer/1"

curl "http://localhost:3000/customer/" -d '{"name":"Evil Mario","phone":"987-654-3210","address":"414 Bizarro St, Apt £","delivery_notes":""}'

curl "http://localhost:3000/customers/"


curl "http://localhost:3000/toppings/"

curl "http://localhost:3000/toppings/" -d '["special mushrooms","oreos"]'

curl "http://localhost:3000/toppings/"



curl "http://localhost:3000/orders/"

pies='{
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

curl "http://localhost:3000/order/" -d "$pies"

curl "http://localhost:3000/orders/"

curl "http://localhost:3000/order/1"

curl -X DELETE "http://localhost:3000/order/1"

curl "http://localhost:3000/orders/"
