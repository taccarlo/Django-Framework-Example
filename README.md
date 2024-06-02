
<div align="center">
<h1> Django REST API study</h1>
<h3> Author: Carlo Tacchella</h3>
</div>

## About this project

This project is a study on the Django web framework. A list filtered by date is displayed using the React JavaScript library. This list shows the earnings and number of subscribers each product has obtained over a given period.

## To run this project

1. Place the correct db.sqlite3 file in the "<i>backend-project</i>" folder. If no db.sqlite3 is provided by the creator of the code, you will need to populate the project using the Django administration panel once the backend part of the project is launched.

>![Immagine 2024-06-02 125535](https://github.com/taccarlo/django-study/assets/3799322/8628947b-c500-4884-9ade-e582daeaab93)

2. Run the backend from the <i>"backend-project "</i> folder

   ```sh
   pipenv shell
   pip install django
   pip install djangorestframework
   pip install django-cors-headers
   python manage.py runserver
   ```

3. Run the frontend from the <i>"frontend-project"</i> folder

   ```sh
   npm install
   npm start
   ```

### Other useful Commands

Create a superuser to access to database

  ```sh
python manage.py createsuperuser
  ```

To make migrations

  ```sh
  python manage.py makemigrations
  ```

To support the app with a DB

  ```sh
python manage.py sqlmigrate subscription 0001 
  ```

To make any changes, delete the migration folder and run the following order

  ```sh
python manage.py migrate
  ```

## About the structure of the SQLlite DB

The "Subscription" Entity is the only entity used in the sequential database for this project.

Primary key:

- *ID_sub* The ID of the subscription

Attributes:

- *starting_date* the start of the subscription
- *ending_date* the end of the subscription
- *ID_prod* the ID of the product
- *prod_desc* the description of the product
- *price* the price of the product

## Business Logic of a Standard Django REST API Project Used in This Project

![django-rest-api-tutorial-example-architecture](https://github.com/taccarlo/django-study/assets/3799322/83418067-9d62-40b0-821b-7c8aa497e4e2)

HTTP requests will be matched by Url Patterns and passed to the Views
Views processes the HTTP requests and returns HTTP responses (with the help of Serializer)
Serializer serializes/deserializes data model objects
Models contains essential fields and behaviors for CRUD operations with Database

### Libraries used on Backend

- <b>rest_framework</b> Used to manage REST API.
- <b>django-cors-headers</b> Needed to run in a single machine the project for testing purposes.

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
- <b>axios</b> used to send http requests to the backend

### Screenshots
>
> ![Immagine 2024-06-02 125408](https://github.com/taccarlo/django-study/assets/3799322/4bd4cb1c-2e2e-422f-821d-b9642bc93e4f)

>![Immagine 2024-06-02 125504](https://github.com/taccarlo/django-study/assets/3799322/56da000f-78d8-4b83-8667-26d49335eaaf)

## Assumptions

- The Subscription Entity of the project is:
Subscription(<u>ID_sub</u>, starting_date, ending_date,ID_prod, prod_desc, price)
In a typical DBMS in a larger project, I would separate the subscription and product information, for example, by placing the product ID and description in a separate table.
- The entire project is set up for a project not yet in production environment.
- I assume that the first requested query is asking to sort first by one attribute and then by another attribute, so the query is a single one ordered by two different parameters.

## REST API endpoints

|              Path              | Method |             Required JSON             |                       Description                      |
|:------------------------------:|:------:|:-------------------------------------:|:------------------------------------------------------:|
| /subscription/              |   GET  |  None  | Get all subscriptions.|
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
- [x] Write a POST query API to obtain the requested data
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
