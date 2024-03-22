# Welcome to APIzza!

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


# SBA 318: Express Server Application

[Click here](https://www.canva.com/design/DAFrinsqKgA/z9-LOsFAqZa9KH2uU-7z6A/view) to see assignment details.

Note several of the objectives were removed due to us not having yet covered the material.


## What, another SBA318 repo?

Yeah, I submitted a different repository for this before. And then accidentally wrapped up half of my work for this project with not one, but _two different_ other projects. And then could not separate them, or even make sense of them. I got 1080º turned around, several times.

I tried to salvage what I could from [ps_rest-express.git](https://github.com/coreyfeder/ps_rest-express.git) and [ps_Express1.git](https://github.com/coreyfeder/ps_Express1.git), and the things I somehow stuck in [ps_319SBA_MongoDB.git](https://github.com/coreyfeder/ps_319SBA_MongoDB.git); but mostly what I managed to salvage was a painful lesson about _needing_ to step away from the computer when my ADHD meds wear off, or else I wreck the place.


## Objectives

* Create a server application with Node and Express.
* Create a RESTful API using Express.
* Create Express middleware.
* Use Express middleware.
* ~~Use a template engine to render views with Express.~~
* ~~Interact with a self-made API through HTML forms.~~


## Instructions, Abridged

Create a small Node and Express server application.
Get functionality in place before worrying about filling it with something interesting.

| Requirement | Rough Adjusted |
| -- | --: |
| Create and use at least two pieces of custom middleware. | 6.10% |
| Create and use error-handling middleware. | 6.10% |
| Use at least three different data categories (e.g., users, posts, or comments). | 6.10% |
| Utilize reasonable data structuring practices. | 6.10% |
| Create GET routes for all data that should be exposed to the client. | 6.10% |
| Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. | 6.10% |
| ~~Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.~~ | 0.00% |
| Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request. | 6.10% |
| Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters.<br /><br />Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished projects efficiently. | 6.10% |
| Utilize route parameters, where appropriate. | 6.10% |
| Adhere to the guiding principles of REST. | 12.20% |
| ~~Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine.<br /><br />If you are stuck on how to approach this, think about ways you could render the current state of your API's data for easy viewing.~~ | 0.00% |
| ~~Use simple CSS to style the rendered views. <br /><br />Note: This is not a test of design; it is a test of serving static files using Express. The CSS can be very simple.~~ | 0.00% |
| ~~Include a form within a rendered view that allows for interaction with your RESTful API.~~ | 0.00% |
| Utilize reasonable code organization practices. | 6.10% |
| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 12.20% |
| Commit frequently to the git repository. | 6.10% |
| Include a README file that contains a description of your application. | 2.44% |
| Level of effort displayed in creativity, presentation, and user experience. | 6.10% |
