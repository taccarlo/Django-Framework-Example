
<div align="center">
<h1> Django rest api study</h1>
<h3> Author: Carlo Tacchella</h3>
</div>

## About this project
This project is a study on the django web framework. A list is shown with the react javascript library filtered by date. This list represents how many earnings and subscribers each product has obtained in a given period of time.

## To run this project
If needed place the right db.sqlite3 file in backend-project folder, if no db.sqlite3 is provided from the creator of the code you shall populate the project in the django administration panel when backend part of the project is launched.
>![Immagine 2024-06-02 125535](https://github.com/taccarlo/django-study/assets/3799322/8628947b-c500-4884-9ade-e582daeaab93)
<!--

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
-->
<!--

In order to create rest api server
  ```sh
  django-admin startproject myrestapiserver
  ```
In order to create the module to manage the subscriptions
  ```sh
  django-admin startapp subscription
```
## installed apps
- rest_framework if is needed run
  ```sh
  pip3 install djangorestframework
  ```
In order to run this project
  ```sh
python manage.py runserver
  ```

Create a super user to access to database
  ```sh
python manage.py createsuperuser
  ```

In order to make migrations
  ```sh
  python manage.py makemigrations
  ```
In order to support the app with a DB
  ```sh
python manage.py sqlmigrate subscription 0001 
  ```

To operate any change delete the migration folder, run again
python manage.py makemigrations and python manage.py migrate
-->

<!--
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
![django-rest-api-tutorial-example-architecture](https://github.com/taccarlo/django-study/assets/3799322/83418067-9d62-40b0-821b-7c8aa497e4e2)

-->
### Libraries used on Backend
- <b>rest_framework</b> Used to manage REST API
- <b>django-cors-headers</b> Needed to run in a single machine the project for testing purposes 


## Frontend JS Visualizer

The frontend is developed in React.
Run the following commands to succesfully execute the frontend JS visualizer:

  ```sh
cd frontend-project
npm install
npm start
  ```

### Libraries used on Visulizer
- <b>react-router-dom</b> used to create a multipage app with dynamic url links 
- <b>axios</b> used to launch http requests to the backend
 

 ### Screenshots
> ![Immagine 2024-06-02 125408](https://github.com/taccarlo/django-study/assets/3799322/4bd4cb1c-2e2e-422f-821d-b9642bc93e4f)

>![Immagine 2024-06-02 125504](https://github.com/taccarlo/django-study/assets/3799322/56da000f-78d8-4b83-8667-26d49335eaaf)




## Assumptions

- The Subscription of the project is: 
Subscription(<u>ID_sub</u>, starting_date, ending_date,ID_prod, prod_desc, price)
In a normal DBMS in a bigger project I would separate the subscription and the product info, for example placing id and product description in a separate table.
- The entire project is set for a project not yet in production environment.
- I assume that the first requested query is asking for sorting first by an attribute and then by an other attribute, so the query is only one ordered by two different parameters.


## REST API endpoints

|              Path              | Method |             Required JSON             |                       Description                      |
|:------------------------------:|:------:|:-------------------------------------:|:------------------------------------------------------:|
| /subscription/              |   GET  |     | Get all subscriptions.|
| /subscription/              |   POST  |   from: starting date, to: ending date | Get products sold in a range of dates with number of subscribers and the revenue.|

Example of GET /subscription/ done with POSTMAN


>![Immagine 2024-05-31 114126](https://github.com/taccarlo/django-study/assets/3799322/86fd4d41-3ba8-40e9-9a72-15eebd8848cd)

 Example of POST /subscription/ done with POSTMAN

>![Immagine 2024-05-31 114024](https://github.com/taccarlo/django-study/assets/3799322/e1f75d8b-fee1-4d5b-8b4a-769b19741ecb)

 Example of GET /subscription/ done connecting to the server directly with a browser

>![Immagine 2024-06-02 125609](https://github.com/taccarlo/django-study/assets/3799322/8e6420bf-71f6-48fd-8f05-c2ada1e8f569)

## Roadmap
- [x] Build a backend in Django
- [x] Populate DB with csv file
- [x] Write post query api to obtain the requested data
    - [x] Query n.1
    - [ ] Query n.2
- [x] Produce a post method
- [x] Test if query is correct from Postman examples
- [x] Build a React Project
    - [x]  passing date between pages
    - [x]  show dates passed
    - [x]  onload request to database itemlist
    - [x]  show itemList
- [x] Set the project on other PC and test if is still working  
- [x] Update readme.md
