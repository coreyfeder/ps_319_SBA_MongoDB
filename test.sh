# Testing

# try:
# - req.json()
# - JSON.stringify(req.json())
# - Util.inspect(req.json())


# curl "http://localhost:3000/test"
# curl "http://localhost:3000/test/qwerty"
# curl "http://localhost:3000/test" -d '{"some": "data"}'

port=5050

curl "http://localhost:${port}/customers/"
curl "http://localhost:${port}/customers/" | jq
curl "http://localhost:${port}/customer/1"
curl "http://localhost:${port}/customer/1" | jq

curl "http://localhost:${port}/customers/" | jq
curl "http://localhost:${port}/customer/" -d '{"name":"Evil Mario","phone":"987-654-3210","address":"414 Bizarro St, Apt £","delivery_notes":""}'
curl "http://localhost:${port}/customers/" | jq



curl "http://localhost:${port}/toppings/"

curl "http://localhost:${port}/toppings/" -d '["special mushrooms","oreos"]'

curl "http://localhost:${port}/toppings/"



curl "http://localhost:${port}/orders/"

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

curl "http://localhost:${port}/order/" -d "$pies"

curl "http://localhost:${port}/orders/"

curl "http://localhost:${port}/order/1"

curl -X DELETE "http://localhost:${port}/order/1"

curl "http://localhost:${port}/orders/"
