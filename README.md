**Week 2: Express.js Fundamentals Assignment**

**Project Overview:**

-This project demonstrates the creation of a RESTful API using Express.js with a clear folder structure, route handling, middleware implementation, and error handling. The API provides endpoints for managing users and products.


1. **Setup Express.js Project:**

   - Installed Node.js using NVM.
   - Created a new project folder named `express-assignment`.
   - Initialized a Node.js project using:
     ```sh
     npm init -y
     ```
   - Installed necessary dependencies:
     ```sh
     npm install express dotenv
     ```

2. **Project Structure:**

     ```
     express-assignment/
     │-- routes/
     │    ├── userRoutes.js
     │    ├── productRoutes.js
     │-- middleware/
     │    ├── logger.js
     │-- controllers/
     │    ├── userController.js
     │    ├── productController.js
     │-- index.js
     │-- package.json
     │-- README.md
     │-- .env
     ```

3. **Running the Application**
 -Start the server:
node index.js


4. **API Endpoints**
   **User Endpoints**
   
| HTTP Method | Endpoint           | Description                   |
|-------------|--------------------|-------------------------------|
| GET         | `/api/users`       | Fetch all users               |
| GET         | `/api/users/:id`   | Fetch a user by ID            |
| POST        | `/api/users`       | Create a new user             |
| PUT         | `/api/users/:id`   | Update a user by ID           |
| DELETE      | `/api/users/:id`   | Delete a user by ID           |

  

5. **Product Endpoints:**
   
| HTTP Method | Endpoint           | Description                   |
|-------------|--------------------|-------------------------------|
| GET         | `/api/products`       | Fetch all products         |
| GET         | `/api/productss/:id`  | Fetch a product by ID      |
| POST        | `/api/products`       | Create a new product       |
| PUT         | `/api/products/:id`   | Update a product by ID     |
| DELETE      | `/api/products/:id`   | Delete a product by ID     |

   

6. **Error Handling:**
   
  app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

7. **Environment Variables:**

The .env file contains configuration variables like the server's port:
PORT=3000

Load them using dotenv:
require("dotenv").config();


8. **Testing:**

   - Run the server using:
     ```sh
     node index.js
     ```
   - Tested API endpoints using Postman.
9. **Example Requests:**
    **Fetch All Users**
    Request:
GET /api/users

   Response:
{ "message": "Fetching all users" }

   **Create a New Product**
   Request:

POST /api/products
Content-Type: application/json

{
  "name": "Laptop",
  "description": "A powerful laptop",
  "price": 1200
}

  Response:

{
  "message": "Creating a new product",
  "data": {
    "name": "Laptop",
    "description": "A powerful laptop",
    "price": 1200
  }
}




