# Django rest api study
## Author: Carlo Tacchella

## Roadmap

- [x] Build a backend in Django
- [x] Populate DB with csv file
- [x] Write post query api to obtain the requested data
    - [x] Query n.1
    - [ ] Query n.2
- [x] Produce a post method
- [ ] Test if query is correct from Postman examples
- [ ] React 
    - [ ]  passing date between pages
    - [ ]  show dates passed
    - [ ]  if no date redirect home
    - [x]  if no date selected in home button not shown and warning
    - [ ]  http request in a separate module
    - [ ]  onload request to database itemlist
    - [ ]  show itemList
- [ ] Frontend react page to show 3 Pages:
    - [ ] All tuples
    - [ ] From-to input page
    - [ ] Result page
- [ ] Set the project on other PC and test if is still working  
- [ ] Update readme.md and insert images of the documentation
    il codice sorgente con tutti i file a corredo necessari
    una breve spiegazione di quanto realizzato.
    Istruzioni per installazione/setup
    Eventuale utilizzo di librerie (anzi: meglio utilizzarle dove queste siano utili allo scopo)
    Fare eventuali assunzioni su aspetti altrimenti non precisati

Tra le altre cose, saranno valutati:

    pulizia, organizzazione e manutenibilità del codice prodotto
    eventuali ottimizzazioni applicate
    la chiarezza espositiva
    inserire in email link ad altri lavori
    allegare nella email il giusto database e le query sql da lanciare una volta migrato il db
    spiegare come eseguire react
    cd my-app
    npm install
    npm start

    npm install react-router-dom axios

Documentazione disponibile su reactrouter.com

## Creating the project
### Creating the app
In order to create rest api server
  ```sh
  django-admin startproject myrestapiserver
  ```
In order to create the module to manage the subscriptions
  ```sh
  django-admin startapp subscription
  ```
### Creating migration from module Subscription
In order to make migrations
  ```sh
  python manage.py makemigrations
  ```
## installed apps
- rest_framework if is needed run
  ```sh
  pip3 install djangorestframework
  ```
## Run this project
In order to make migrations
  ```sh
python manage.py runserver
  ```
## Setting up database

In order to support the app with a DB
  ```sh
python manage.py sqlmigrate subscription 0001 
  ```
Create a super user to access to database
  ```sh
python manage.py createsuperuser
  ```
example admin admin@admin.com admin

To operate any change delete the migration folder, run again
python manage.py makemigrations and python manage.py migrate
## Structure
***********PRENDI DA QUI https://www.geeksforgeeks.org/python-web-development-django/ o https://www.bezkoder.com/django-rest-api/*************
# Business Logic
The entity "Subscription"
Primary key: 
- *ID_sub* The ID of the subscription
Attributes:
- *starting_date* the start of the subscription
- *ending_date* the end of the subscription
- *ID_prod* the ID of the product
- *prod_desc* the description of the product
- *price* the price of the product

# Data Access Layer
# User Interface

## About this Project
I choose to develop the project in Django framework.

## Assumptions
-The Subscription of the project is: 
Subscription(<u>ID_sub</u>, starting_date, ending_date,ID_prod, prod_desc, price)
In a normal DBMS in a bigger project I would separate the subscription and the product info like the id, the product description in a separate table.
-settings.py file is set for a project not yet in production environment.
- I assume that the first requested query is asking for sorting first by an attribute and then by an other attribute, so the query is only one.

## About the testing

## Rest API Documentation

<!--
<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<div align="center">
  <a href="https://github.com/taccarlo/django-study">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/taccarlo/django-study"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/taccarlo/django-study">View Demo</a>
    ·
    <a href="https://github.com/taccarlo/django-study/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/taccarlo/django-study/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/taccarlo/django-study/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## About The Project

The shopping website backend implements these features:

- [X] Show all available items
- [X] Purchase a single item (logged-in user)
- [X] Show purchased items (logged-in user)
- [X] Show details for a purchased item (logged-in user)
- [X] Register a new user
- [X] Login and logout for users/admin
- [X] Public dashboard with public statistics
- [X] Dashboard with statistics about purchased items (admin only)

This project is for educational purposes.

### REST API endpoints

|              Path              | Method |             Required JSON             |             Header            |                       Description                      |
|:------------------------------:|:------:|:-------------------------------------:|:-----------------------------:|:------------------------------------------------------:|
| /statistics                    |   GET  |                                       |                               | Overall statistics for the landing page                |
| /items                         |   GET  |                                       |                               | Show all available items                               |
| /items/:id                     |   GET  |                                       |                               | Show the details for an item                           |
| /items                         |  POST  |      name,price,details,producer      | Authorization: Bearer <token> | Add an item to the shop store (admin only)             |
| /items/:id                     |   PUT  |      name,price,details,producer      | Authorization: Bearer <token> | Update the details for the specified item (admin only) |
| /items/:id                     | DELETE |                                       | Authorization: Bearer <token> | Delete an item from the shop store (admin only)        |
| /items/:id/purchase            |  POST  |                                       | Authorization: Bearer <token> | Purchase the item for the logged-in user               |
| /users/me/orders               |   GET  |                                       | Authorization: Bearer <token> | Show all the orders for the logged-in user             |
| /users/me/orders/:id/items     |   GET  |                                       | Authorization: Bearer <token> | Show the details for the specified order               |
| /auth/login                    |  POST  |           username,password           |                               | The username and password you want to login with       |
| /auth/logout                   |  POST  |                                       |                               | Logout the current user                                |
| /auth/refresh                  |  POST  |                                       |                               | Refresh the JWT token                                  |
| /auth/register                 |  POST  | username,password, firstname,lastname | Authorization: Bearer <token> | Register a new user                                    |
| /orders                        |   GET  |                                       | Authorization: Bearer <token> | Get all the orders                                     |
| /orders/:id                    |   GET  |                                       | Authorization: Bearer <token> | Get the specified order                                |
| /orders/:id/pay                |  POST  |                                       | Authorization: Bearer <token> | Pay for the order                                      |
| /admin/statistics              |   GET  |                                       | Authorization: Bearer <token> | Admin-only dashboard                                   |

## Getting Started

### Prerequisites

- Golang (>= 1.17) 
- MySQL (5.7)
- Postman - https://www.getpostman.com/
- Stripe API Key - https://dashboard.stripe.com/account/apikeys
- Dokku on a server (optional) - https://dokku.viewdocs.io/dokku/getting-started/installation
- Docker Compose (optional) - https://docs.docker.com/compose/install/
- Docker (optional) - https://docs.docker.com/install/

### Local development using Docker Compose

1. Launch the Docker Compose file. It will start the MySQL and web application containers. (Ports 3306 and 8080)

    docker-compose up -d

2. Open the browser and navigate to http://localhost:8080

### Deployment on Heroku

Notes:
- The MySQL database is provided by Heroku and its current version is 8.0;

### Deployment on Dokku

On the server, you can deploy the application using the following command:

1. Create a new app on Dokku

    ```bash
    dokku apps:create <app-name>
    ```
   
2. Set the environment variables

    ```bash
    # Set the following environment variables only if DATABASE_URL is not set
    dokku config:set <app-name> DB_HOST=<db-host> DB_PORT=<db-port> DB_USER=<db-user> DB_PASSWORD=<db-password> DB_NAME=<db-name>
    # Set the JWT_SECRET environment variable (e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9)
    dokku config:set <app-name> JWT_SECRET=<jwt-secret>
    # Set the TIMEZONE environment variable (e.g. Paris/Europe)
    dokku config:set <app-name> TIMEZONE=<timezone>
    # Set the PORT environment variable (e.g. 8080)
    dokku config:set <app-name> PORT=<port>
    # Set the STRIPE_SECRET_KEY environment variable (e.g. sk_test_...)
    dokku config:set <app-name> STRIPE_API_KEY=<stripe-api-key>
   ```
   
3. Install the MySQL plugin
    
    ```bash
    sudo dokku plugin:install https://github.com/dokku/dokku-mysql.git mysql
    ```
    
4. Create the database. In this case, we use MySQL version 5.7.

    ```bash
    export MYSQL_IMAGE_VERSION=5.7
    dokku mysql:create <app-name-db>
    ```
   
5. Link the database container to the app

    ```bash
    dokku mysql:link <app-name> <app-name-db>
    ```
   
6. Select the Dockerfile as a builder
   
    ```bash
    dokku builder:set <app-name> selected dockerfile
    ```
   
On the development machine, you can run the following commands to deploy the application:

7. Setup the remote repository 

    ```bash
    git remote add dokku dokku@<dokku-host>:<app-name>
    ```
8. Deploy the app

    ```bash
    git push dokku master
    ```

### Using the API

- The API is accessible on the development machine (e.g. http://localhost:8080)
- The API is accessible on the server machine (e.g. http://<dokku-host>:8080)
- The client application used is `httpie` (https://httpie.org/)

#### Login

 ```bash
 http POST http://localhost:8080/auth/login username=<username> password=<password>
 ```

Output:

```json
{
    "code": 200,
    "expire": "2021-12-21T15:07:32Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDAxODU2NTIsIm9yaWdfaWF0IjoxNjQwMTgyMDUyLCJ1c2VySUQiOjZ9.yg-a4SgeKgK74fsb2PrnREFYPIwst1WFKM5Xga1t2E4"
}
```

#### Get the list of orders

 ```bash
 http GET http://localhost:8080/users/me/orders "Authorization:Bearer <token>"
 ```

 Output:

 ```json
HTTP/1.1 200 OK
Content-Length: 634
Content-Type: application/json; charset=utf-8
Date: Wed, 22 Dec 2021 14:10:18 GMT
        
{
   "data": [
      {
         "created_at": "2021-12-22T13:51:35Z",
         "id": 6,
         "items": null,
         "payment_id": "432423423423",
         "payment_method": "card",
         "status": "created",
         "total_price": 110.13,
         "updated_at": "2021-12-22T13:51:35Z",
         "user_id": 6
      },
      {
         "created_at": "2021-12-22T13:51:35Z",
         "id": 7,
         "items": null,
         "payment_id": "532525454545",
         "payment_method": "paypal",
         "status": "paid",
         "total_price": 13.2,
         "updated_at": "2021-12-22T13:51:35Z",
         "user_id": 6
      },
      {
         "created_at": "2021-12-22T13:51:35Z",
         "id": 8,
         "items": null,
         "payment_id": "232342342324234",
         "payment_method": "card",
         "status": "created",
         "total_price": 213.41,
         "updated_at": "2021-12-22T13:51:35Z",
         "user_id": 6
      }
   ],
   "message": "OK",
   "success": true
}
```


#### Get all available items

 ```bash
 http GET http://localhost:8080/items
 ```

Output:

```json
HTTP/1.1 200 OK
Content-Length: 1254
Content-Type: application/json; charset=utf-8
Date: Tue, 21 Dec 2021 22:36:27 GMT

{
    "data": [
        {
            "category": "garden",
            "created_at": "2021-12-21T15:52:22Z",
            "description": "Et sunt culpa unde distinctio quos.",
            "id": 1,
            "name": "The Misty Cup",
            "price": 244.3,
            "producer": "Beier Ltd",
            "updated_at": "2021-12-21T15:52:22Z"
        },
        {
            "category": "home",
            "created_at": "2021-12-21T15:52:22Z",
            "description": "Quos vel ut esse incidunt minima minima quae.",
            "id": 2,
            "name": "The Begging Jug",
            "price": 302.1,
            "producer": "Parker, Hyatt and Kris",
            "updated_at": "2021-12-21T15:52:22Z"
        },
        {
            "category": "electronic",
            "created_at": "2021-12-21T15:52:22Z",
            "description": "Earum aliquid deleniti beatae quibusdam inventore itaque velit voluptas.",
            "id": 3,
            "name": "The Expensive Flower",
            "price": 110.13,
            "producer": "Kutch Ltd",
            "updated_at": "2021-12-21T15:52:22Z"
        },
        {
            "category": "garden",
            "created_at": "2021-12-21T15:52:22Z",
            "description": "Quae quis laborum odio provident.",
            "id": 4,
            "name": "The Challenging Stove Salon",
            "price": 13.2,
            "producer": "Wisozk-Larson",
            "updated_at": "2021-12-21T15:52:22Z"
        },
        {
            "category": "home",
            "created_at": "2021-12-21T15:52:22Z",
            "description": "Enim provident velit blanditiis ut exercitationem.",
            "id": 5,
            "name": "The Performing Window Boutique",
            "price": 213.41,
            "producer": "Dickinson, Collins and Cremin",
            "updated_at": "2021-12-21T15:52:22Z"
        }
    ],
    "message": "Get all items",
    "success": true
}
```

#### Get details of an item

 ```bash
 http GET http://localhost:8080/items/1
 ```

Output:

```json
HTTP/1.1 200 OK
Content-Length: 257
Content-Type: application/json; charset=utf-8
Date: Tue, 21 Dec 2021 22:37:57 GMT

{
   "data": {
      "category": "garden",
      "created_at": "2021-12-21T15:52:22Z",
      "description": "Et sunt culpa unde distinctio quos.",
      "id": 1,
      "name": "The Misty Cup",
      "price": 244.3,
      "producer": "Beier Ltd",
      "updated_at": "2021-12-21T15:52:22Z"
    },
   "message": "Get item",
   "success": true
}

```

#### Create an item

```bash
http POST http://localhost:8080/items name="The Misty Cup" price="244.3" producer="Belkin" category="garden" description="Et sunt culpa unde distinctio quos."
```

Output:

 ```json
HTTP/1.1 201 Created
Content-Length: 53
Content-Type: application/json; charset=utf-8
Date: Tue, 21 Dec 2021 23:01:28 GMT

{
    "data": null,
    "message": "Created item",
    "success": true
}
```

#### Purchase an item

1. Purchase an item and create a new order.

 ```bash
http POST http://localhost:8080/items/1/purchase "Authorization:Bearer <token>"
```

Output:

```json
HTTP/1.1 201 Created
Content-Length: 485
Content-Type: application/json; charset=utf-8
Date: Wed, 22 Dec 2021 14:12:57 GMT

{
    "data": {
        "created_at": "0001-01-01T00:00:00Z",
        "id": 9,
        "items": [
            {
                "category": "home",
                "created_at": "2021-12-22T13:51:35Z",
                "description": "Quos vel ut esse incidunt minima minima quae.",
                "id": 2,
                "name": "The Begging Jug",
                "price": 302.1,
                "producer": "Parker, Hyatt and Kris",
                "updated_at": "2021-12-22T13:51:35Z"
            }
        ],
        "payment_id": "",
        "payment_method": "stripe",
        "status": "created",
        "total_price": 302.1,
        "updated_at": "0001-01-01T00:00:00Z",
        "user_id": 6
    },
    "message": "Purchased item: order created",
    "success": true
}
```

2. Pay the order

```bash
http POST http://localhost:8080/orders/9/pay "Authorization:Bearer <token>"
```

Output:

```json
HTTP/1.1 200 OK
Content-Length: 482
Content-Type: application/json; charset=utf-8
Date: Wed, 22 Dec 2021 14:13:48 GMT

{
    "data": {
        "created_at": "2021-12-22T14:12:57Z",
        "id": 9,
        "items": [
            {
                "category": "home",
                "created_at": "2021-12-22T13:51:35Z",
                "description": "Quos vel ut esse incidunt minima minima quae.",
                "id": 2,
                "name": "The Begging Jug",
                "price": 302.1,
                "producer": "Parker, Hyatt and Kris",
                "updated_at": "2021-12-22T13:51:35Z"
            }
        ],
        "payment_id": "ch_3K9VZfIfr49YY8SJ2Zxl6iZJ",
        "payment_method": "stripe",
        "status": "paid",
        "total_price": 302.1,
        "updated_at": "2021-12-22T14:12:57Z",
        "user_id": 6
    },
    "message": "OK",
    "success": true
}
```

#### Public statistics 

 ```bash
 http GET http://localhost:8080/statistics
 ```

 Output:
   - Total amount of all orders
   - Total registered users
   - Total amount of all items
   - Total amount of registered users, orders, and items for last month, last week, and yesterday
   
```json
HTTP/1.1 200 OK

{
   "success": true,
   "message": "Statistics retrieved",
   "data": {
      "last_day": {
         "totalAmount": 1219.8800106048584,
         "totalOrders": 8,
         "totalUsers": 7
      },
      "last_month": {
         "totalAmount": 1219.8800106048584,
         "totalOrders": 8,
         "totalUsers": 7
      },
      "last_week": {
         "totalAmount": 1219.8800106048584,
         "totalOrders": 8,
         "totalUsers": 7
      },
      "total_items": 5,
      "total_orders": 8,
      "total_users": 7
   }
}
``` 

#### Admin statistics

 ```bash
 http GET http://localhost:8080/statistics/admin
 ```

 Output:
   - Total amount of all orders
   - Total registered users
   - Total amount of all items
   - Total amount of registered users, orders, and items for last month, last week, and yesterday
   - Best selling items
   - Most profitable users
   - Worst selling items
   - Items not sold

 ```json
HTTP/1.1 200 OK

{
    "success": true,
    "message": "Statistics retrieved",
    "data": {
        "items_not_ordered": [
            {
                "id": 5,
                "name": "The Performing Window Boutique",
                "description": "Enim provident velit blanditiis ut exercitationem.",
                "price": 213.41,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 0
            }
        ],
        "last_day": {
            "totalAmount": 1219.8800106048584,
            "totalOrders": 8,
            "totalUsers": 7
        },
        "last_month": {
            "totalAmount": 1219.8800106048584,
            "totalOrders": 8,
            "totalUsers": 7
        },
        "last_week": {
            "totalAmount": 1219.8800106048584,
            "totalOrders": 8,
            "totalUsers": 7
        },
        "least_ordered_items": [
            {
                "id": 4,
                "name": "The Challenging Stove Salon",
                "description": "Quae quis laborum odio provident.",
                "price": 13.2,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 1
            },
            {
                "id": 1,
                "name": "The Misty Cup",
                "description": "Et sunt culpa unde distinctio quos.",
                "price": 244.3,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 2
            },
            {
                "id": 2,
                "name": "The Begging Jug",
                "description": "Quos vel ut esse incidunt minima minima quae.",
                "price": 302.1,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 2
            },
            {
                "id": 3,
                "name": "The Expensive Flower",
                "description": "Earum aliquid deleniti beatae quibusdam inventore itaque velit voluptas.",
                "price": 110.13,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 2
            }
        ],
        "most_ordered_items": [
            {
                "id": 1,
                "name": "The Misty Cup",
                "description": "Et sunt culpa unde distinctio quos.",
                "price": 244.3,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 2
            },
            {
                "id": 2,
                "name": "The Begging Jug",
                "description": "Quos vel ut esse incidunt minima minima quae.",
                "price": 302.1,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 2
            },
            {
                "id": 3,
                "name": "The Expensive Flower",
                "description": "Earum aliquid deleniti beatae quibusdam inventore itaque velit voluptas.",
                "price": 110.13,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 2
            },
            {
                "id": 4,
                "name": "The Challenging Stove Salon",
                "description": "Quae quis laborum odio provident.",
                "price": 13.2,
                "producer": "",
                "category": "",
                "created_at": "0001-01-01T00:00:00Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "total_orders": 1
            }
        ],
        "total_items": 5,
        "total_orders": 8,
        "total_users": 7,
        "users_spend_more": [
            {
                "id": 1,
                "username": "keeling.else",
                "firstname": "",
                "lastname": "",
                "email": "kayla.hilpert@gmail.com",
                "created_at": "2021-12-22T01:35:16Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "orders": null,
                "total_spent": 656.5300064086914
            },
            {
                "id": 3,
                "username": "forrest75",
                "firstname": "",
                "lastname": "",
                "email": "dawn47@hotmail.com",
                "created_at": "2021-12-22T01:35:16Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "orders": null,
                "total_spent": 302.1000061035156
            },
            {
                "id": 6,
                "username": "test",
                "firstname": "",
                "lastname": "",
                "email": "botsford.carlee@yahoo.com",
                "created_at": "2021-12-22T01:35:16Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "orders": null,
                "total_spent": 244.3000030517578
            },
            {
                "id": 2,
                "username": "parker.annie",
                "firstname": "",
                "lastname": "",
                "email": "ereilly@gmail.com",
                "created_at": "2021-12-22T01:35:16Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "orders": null,
                "total_spent": 123.3299970626831
            }
        ]
    }
}
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/taccarlo/django-study/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/taccarlo/django-study/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/taccarlo/django-study/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/taccarlo/django-study/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/taccarlo/django-study/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

-->