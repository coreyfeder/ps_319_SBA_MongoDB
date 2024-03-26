# Welcome to APIzza v2!

![Distressing-looking Mario, or possibly Luigi in disguise, holding a sad, drippy pizza slice.](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yBZb0D-yDOv_nOd7pfdCAwHaEV%26pid%3DApi&f=1&ipt=396a524c3775eb18916a1b3520aa625ba4689ca4e9842a69bc580e016995e6b8&ipo=images)
```
Get your hot, fresh pizza pie
With our hot, fresh pizza API.
```

Host: **http://localhost:5050/**

Required headers:
* `Content-Type: application/json`
* `Accept: application/json`


## Endpoints

Fields required unless marked as _optional_.

| endpoint | method | description | data |
|--|--|--|--|
| `/customers` | GET | See a list of customers. Who cares about privacy?! |  |
| `/customer/:customer_id` | GET | Receive one customer's detailed record.<br>*_Currently provides no additional detail._ |  |
| `/customer` | POST | Create a new customer. | `name`: _string_,<br>`phone`: _string_,<br>`address`: _string_,<br>`delivery_notes`: _string_ (optional) Any special instructions necessary for successful delivery. |
| `/toppings` | GET | See a list of currently-available toppings. |  |
| `/toppings` | POST | Add a new topping. We take all forms of special request! | _[string*]_ |
| `/orders` | GET | See a list of currently-open orders. |  |
| `/order/order_id` | GET | See details of a specific order.<br>*_Currently provides no additional detail._ |  |
| `/order` | POST | Place an order! Yeaahh, this is the one you want. | `customer_id`: _integer_<br>`pizzas`: [ {`size`, `toppings`, `notes`}* ], `order_notes`: _string_ (optional) |
| `/order/order_id` | DELETE |  WHY WOULD YOU WANT TO DO THIS. |  |

<br>
<br>
<br>
<br>

---


# SBA 319: MongoDB Database Application

- begun 2024-03-12
- lost in time
- due 2024-04-02

[Click here](https://www.canva.com/design/DAFrigp0V5U/76Et4j_4KjlIyGSiv6gNsw/view) to see assignment details.

[Click here](https://perscholas.instructure.com/courses/1923/assignments/355838) for course page.

Note several of the objectives were removed due to us not having yet covered the material.


ddd## What, _another_ SBA318 repo?

Not really. The old SBA 319 repo _is_ one of the places I was accidentally putting SBA 318 code; but for this project I'm starting fresh from my final(ish) SBA318 and converting it to use MongoDB.


## Objectives

* Create a server application with Node, Express, and MongoDB.
* Create a CRUD API using Express and MongoDB.
* Create MongoDB indexes.
* Use MongoDB indexing to make efficient queries.
* Create MongoDB validation rules.
* Use MongoDB validation to ensure data consistency.


## Instructions, Abridged

Create a small Node and Express server application.
Get functionality in place before worrying about filling it with something interesting.

| Requirement | Weight |
| -- | --: |
| Use at least three different data collections within the database (such as users, posts, or comments). | 5% |
| Utilize reasonable data structuring practices. | 10% |
| Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. | 10% |
| Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. | 10% |
| Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. | 10% |
| Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request | 10% |
| Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. | 5% |
| Include sensible MongoDB data validation rules for at least one data collection.<br><br>Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error. | 5% |
| Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.<br><br>Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents). | 5% |
| Utilize reasonable code organization practices. | 5% |
| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 10% |
| Commit frequently to the git repository. | 5% |
| Include a README file that contains a description of your application. | 5% |
| Level of effort displayed in creativity, presentation, and user experience. | 5% |

**Bonus**:
Use Mongoose to implement your application.
Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s).
