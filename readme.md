# Airbnb Clone Project

## Project Overview

This project is an Airbnb clone built using Node.js, Express, MongoDB, and EJS templating. It allows users to create, view, update, and delete property listings similar to Airbnb. The application connects to a MongoDB database to store listing data and uses EJS for server-side rendering of views. The project serves static assets such as CSS and JavaScript from the public directory.

## Folder Structure Backend

```
airbnb-clone/
│
├── app.js
│
├── init/
│   ├── data.js
│   └── init.js
│
├── models/
│   └── listing.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
└── views/
    ├── layouts/
    │   └── boilerplate.ejs
    ├── includes/
    │   ├── navbar.ejs
    │   └── footer.ejs
    ├── listings/
    │   ├── index.ejs
    │   ├── show.ejs
    │   ├── new.ejs
    │   └── edit.ejs
    └── error.ejs
```

## API Routes

| Route | HTTP Method | Description |
|-------|------------|-------------|
| `/` | GET | Returns a simple "Hello World" message |
| `/listings` | GET | Displays a list of all property listings |
| `/listings/new` | GET | Shows a form to create a new listing |
| `/listings` | POST | Creates a new listing with submitted form data |
| `/listings/:id` | GET | Shows details of a specific listing |
| `/listings/:id/edit` | GET | Shows a form to edit an existing listing |
| `/listings/:id` | PUT | Updates a listing with submitted form data |
| `/listings/:id` | DELETE | Deletes a listing by its ID |
| `/error` | GET | Displays a generic error page |

## Listing Model Schema

The `Listing` model defines the following fields:

- `title`: String (required)
  - The title of the listing

- `description`: String (required, max 500 characters)
  - A description of the property

- `image`: String (default URL)
  - URL of an image representing the listing
  - Defaults to a placeholder image if none provided

- `price`: Number (required, minimum 499)
  - Price per night for the listing

- `location`: String (required)
  - Location of the property

- `country`: String (required)
  - Country where the property is located

## Technologies Used

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose

- **Frontend**
  - EJS templating engine
  - Method Override for HTTP verbs

- **Utilities**
  - Custom error handling
  - Async route wrappers

## Future Features

- Authentication system
- Enhanced security features
- Deployment configuration

## Getting Started

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Set up MongoDB connection
4. Run the app
   ```
   npm start
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/newFeature`)
3. Commit your changes (`git commit -m 'Add some newFeature'`)
4. Push to the branch (`git push origin feature/newFeature`)
5. Open a Pull Request

---
