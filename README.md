My API Project


Overview:


This project is a simple REST API built using Node.js, Express, and MongoDB. It includes two main APIs: one for inserting data into a collection named user_details and another for fetching all the data from that collection.

Project Structure:

The project follows the MVC (Model-View-Controller) design pattern:

Models: Define the data structure (e.g., User schema).

Controllers: Handle the HTTP requests and responses (e.g., userController.js).

Services: Contain the business logic and interact with the database (e.g., userService.js).

Configuration: Manages environment variables and database connections (e.g., db.js).

my-api-project/
│
├── config/
│   └── db.js               # MongoDB connection setup
│
├── controllers/
│   └── userController.js   # Handles incoming API requests
│
├── models/
│   └── User.js             # Defines the User schema
│
├── services/
│   └── userService.js      # Business logic and database interaction
│
├── .env.example            # Environment variable example file
├── package.json            # Project metadata and dependencies
├── server.js               # Entry point of the application
└── README.md               # Project documentation



APIs
1. POST /api/users
Purpose: Create a new user in the user_details collection.

Body :

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

Res:

{
  "_id": "some_id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}


2. GET /api/users

Purpose: Fetch all users from the user_details collection

res:

[
  {
    "_id": "some_id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
]


Database Configuration:

MongoDB is used as the database.

The connection string is stored in an .env file.

Example .env file  :

MONGO_URI=mongodb://localhost:27017/mydatabase
PORT=5000


Installation and Setup :

Prerequisites:

Node.js and npm should be installed on your machine.

MongoDB should be running locally or you should have access to a MongoDB instance.

Steps to Run the Project

Clone the repository:


git clone <repository_url>

cd my-api-project

Install the dependencies:


npm install


Create a .env file based on .env.example and set your MongoDB URI:

MONGO_URI=atlas cluster url

PORT=5000

Start the server:

npm start


How It Works:

Database Connection: The server connects to MongoDB using the connection string provided in the .env file.
Creating a User: You can send a POST request to /api/users to create a new user. The user data will be saved in the user_details collection in MongoDB.


Fetching Users:

 You can send a GET request to /api/users to fetch all users stored in the database.

 
Error Handling:

Proper error handling is implemented throughout the project. If any operation fails, the API will return a relevant error message with the appropriate HTTP status code.








