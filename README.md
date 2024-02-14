# Secrets: Basic-Auth-Nodejs-Postgres

## Description:
Basic-Auth-Nodejs-Postgres is a Node.js application that provides basic authentication using Express.js and PostgreSQL. It allows users to register, log in, and access secret content. Users can register with their email and password, log in with their credentials, and upon successful authentication, access secret content.

## Installation:
1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install dependencies by running `npm install`.
4. Set up a PostgreSQL database named "secrets" with a table named "users" having columns: `id SERIAL PRIMARY KEY`, `email VARCHAR(100) UNIQUE NOT NULL`, and `password VARCHAR(100) NOT NULL`.
5. Update the database connection details in `index.js` if necessary.
6. Run the application with `npm start`.

## Usage:
1. Visit the homepage (`/`) to get started.
2. Navigate to `/register` to create a new account by providing your email and password.
3. After registration, you can proceed to `/login` to log in with your credentials.
4. Upon successful login, you will be redirected to the `/secrets` page where you can access secret content.
5. If you attempt to access `/secrets` without logging in, you will be redirected to the login page.

## Dependencies:
- Express.js: Web application framework for Node.js.
- Body-parser: Middleware to parse incoming request bodies.
- EJS: Embedded JavaScript templates for generating HTML markup.
- pg: PostgreSQL client for Node.js.

## Author:
Vinit Yadav

## License:
This project is licensed under the ISC License.
