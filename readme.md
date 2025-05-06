# Airbnb Clone Project

## Project Overview
This project is an Airbnb clone built using Node.js, Express, MongoDB, and EJS templating. It allows users to create, view, update, and delete property listings similar to Airbnb. The application connects to a MongoDB database to store listing data and uses EJS for server-side rendering of views. The project serves static assets such as CSS and JavaScript from the public directory.

## Folder Structure

- **app.js**  
  The main application file where the Express server is configured, routes are defined, and MongoDB connection is established.

- **init/**  
  Contains initialization scripts and data for seeding or setting up the application (e.g., `data.js`, `init.js`).

- **models/**  
  Contains Mongoose models defining the data schemas.  
  - `listing.js`: Defines the schema for property listings.

- **public/**  
  Contains static assets served by the application.  
  - `css/`: Stylesheets (e.g., `style.css`)  
  - `js/`: Client-side JavaScript files (e.g., `script.js`)

- **utils/**  
  Utility modules for error handling and async wrapper functions.  
  - `ExpressError.js`: Custom error class for Express.  
  - `wrapAsync.js`: Helper to wrap async route handlers and catch errors.

- **views/**  
  EJS templates for rendering HTML pages.  
  - `layouts/`: Boilerplate layout templates.  
  - `includes/`: Partial templates like navbar and footer.  
  - `listings/`: Templates related to listings (index, show, new, edit).  
  - `error.ejs`: Error page template.

## API Routes

- `GET /`  
  Returns a simple "Hello World" message.

- `GET /listings`  
  Displays a list of all property listings.

- `GET /listings/new`  
  Shows a form to create a new listing.

- `POST /listings`  
  Creates a new listing with data submitted from the form.

- `GET /listings/:id`  
  Shows details of a specific listing by its ID.

- `GET /listings/:id/edit`  
  Shows a form to edit an existing listing.

- `PUT /listings/:id`  
  Updates a listing with the submitted form data.

- `DELETE /listings/:id`  
  Deletes a listing by its ID.

- `GET /error`  
  Displays a generic error page.

## Listing Model Schema

The `Listing` model has the following fields:

- `title` (String, required): The title of the listing.
- `description` (String, required, max length 500): A description of the property.
- `image` (String, default URL): URL of an image representing the listing. Defaults to a placeholder image if none provided.
- `price` (Number, required, minimum 499): Price per night for the listing.
- `location` (String, required): Location of the property.
- `country` (String, required): Country where the property is located.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templating engine
- Method Override for HTTP verbs
- Custom error handling utilities

---

This README provides a comprehensive overview of the Airbnb clone project structure, API routes, and data model to help you understand and build upon the existing codebase.
