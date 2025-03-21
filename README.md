# ECOM


Milestone 1: Project Overview
Brief Overview: This project involves developing a fully functional e-commerce platform utilizing the MERN stack — MongoDB, Express, React, and Node.js. The application will be built using React's Create React App (CRA) for the front-end, MongoDB as the database solution, and Node.js with Express to handle the back-end server operations.

The project will be split into two main areas: Frontend (client-side) and Backend (server-side) development.

Frontend: We will be creating various pages for user interaction, including:

Login Page
Sign Up Page
Forgot Password Page
Home Page
Product Display Page
Cart Page
Address Page
Payment Page
Order Confirmation Page
Order History Page
Help Page
Error Page
Detailed Product Pages
Backend: The server will interact with MongoDB, a NoSQL database, to handle data management. We will be using the Mongoose library to interact with the database and define schemas for data consistency. To manage communication between the front-end and the back-end, we will implement APIs that allow for CRUD operations (Create, Read, Update, Delete) using HTTP methods like POST, GET, PUT, PATCH, and DELETE.

We’ll integrate bcrypt for password hashing to ensure user data security, and the entire project will follow best practices for backend structure, focusing on scalability and maintainability.

Milestone 2: Frontend Development (Login Page)
For this milestone, we successfully created the Login Page using React's Create React App (CRA). To improve the user interface and design, we will be updating the layout with Tailwind CSS for styling and incorporate React-Icons for intuitive icons. Tailwind CSS will help us streamline the design process with its utility-first classes, making the UI responsive and visually appealing.

The Login Page will include fields for the user's email and password, and will handle form validation, state management, and error handling for incorrect login attempts. React Icons will be utilized for visual appeal and ease of use, enhancing the overall experience.

Milestone 3: Backend Structure and Initial Setup
At this stage, we’ve laid the foundation for the backend by setting up the directory structure for the project. The backend is structured as follows:

src/ Directory: Contains all source code files for the server.
config/: Stores environment configuration files like .env for MongoDB URL and the server port.
controllers/: Defines functions to handle incoming requests for various routes.
database/: Contains the MongoDB connection logic in db.js.
middleware/: Houses custom middleware functions such as error.js for centralized error handling.
model/: Contains Mongoose models for the database schema.
routers/: Defines route handlers for different API endpoints.
utils/: Stores utility functions, including the ErrorHandler.js to manage application-level errors.
In the index.js file, we imported Express, initialized the app, and set up basic routing and server listening. We can now handle HTTP requests through app.get and set the server to listen for incoming requests on the specified port.

Milestone 4: Backend Structure and Initial Setup
creating user model, user controller and Multer support