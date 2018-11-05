# Node Express MVC EJS Bootstrap Starter app

A sample starter app using:

- Node.js platform
- Express web framework 
- EJS templating engine
- MVC design pattern
- Mongoose MongoDB object modeling
- Lodash for JavaScript object iteration and manipulation 
- jQuery library for DOM manipulation
- BootStrap framework for responsive design
- nedb In-memory database
- Winston logger

# Prerequisites

Following must be downloaded, installed, and configured according to the product directions: 

1. Node.js and npm 
2. Git version control system

# Get started

Clone this repo to your local machine. If Windows, 

- Right-click on parent folder and select:
- git clone https://bitbucket.org/professorcase/node-express-mvc-ejs-start

# Live updates

Open a command window in your new project folder. Install nodemon globally to enable live updates.

```
> npm install -g nodemon
```


# Install dependencies as needed before running the app

Run npm install to install all the dependencies in the package.json file once before you begin and as new dependencies are added.

```
> npm install
```

# Run the app

In Windows, right-click on the project folder and "Open Command Window Here as Administrator". At the prompt, type nodemon app to start the server.  (CTRL-C to stop.)

```
> nodemon app.js
```

Open your browser to the location displayed, e.g. http://localhost:8089/

# Building and editing the code

Install Visual Studio Code.

Right-click on your project folder and select "Open with Code".

To type commands from within VS Code, from the VS Code menu, select View / Integrated Terminal.

RECOMMENDED: 

- Under VS Code menu "File" option, check "Autosave"


# Application structure

- app.js - Starting point for the application. Defines the express server, requires routes and models. Loads everything and begins listening for events. 
- config/ - configuration information configuration/environment variables
- controllers/ - logic for handling client requests
- data/ - seed data loaded each time the application starts
- models/ - schema descriptions for custom data types
- routes/ - route definitions for the API
- views/ - EJS - embedded JavaScript and HTML used to create dynamic pages

