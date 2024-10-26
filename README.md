Product API
Welcome to the Product API! This Node.js API lets you manage a list of products with details like name, price, and quantity.
Table of Contents
Features
Technologies Used
Getting Started
Environment Variables
API Endpoints
Contributing
License
Features
CRUD Operations: Add, read, update, and delete products.
Database Connection: Connects to MySQL database for persistent storage.
Environment Management: Uses .env file for secure and easy environment variable management.
Technologies Used
Node.js
Express.js
MySQL (with mysql or mysql2 package)
dotenv
Getting Started
Prerequisites
Node.js and npm installed
MySQL installed and configured
Installation
https://github.com/dineshmutcheti/product_object_api.git
Navigate to the project directory:
cd product-api
Install dependencies:
npm install
Create a .env file: In the root of your project, create a .env file with the following variables:
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=product_db
PORT=3000
Start the server:
npm node app.js
Environment Variables
The .env file should include:

DB_HOST: Database host (e.g., localhost)
DB_USER: Database username
DB_PASS: Database password
DB_NAME: Database name
PORT: Port to run the server (default: 3000)
API Endpoints
Here’s a list of the main API endpoints:

GET /products: Retrieve all products.
POST /products: Add a new product (requires name, price, and quantity in the request body).
PUT /products/
: Update an existing product by ID.
DELETE /products/
: Delete a product by ID.
