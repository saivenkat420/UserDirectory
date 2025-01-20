User Directory React App

Introduction

The User Directory app is made with React. It helps people see and use a list of users from an online API. With this app, you can search for users, sort them, and check detailed info about each person. You can also switch between light and dark themes.

What the App Can Do

Home Page:

Shows a list of users with their names, emails, and cities.

Lets you search for users by name.

Lets you sort users in A-Z or Z-A order.

User Details Page:

Shows more details about a user, like their phone number, company, and website.

Theme Switcher:

Lets you pick light or dark mode.

Handles Errors:

Shows error messages if the API doesn't work and lets you retry.

How the Project is Organized

user-directory
├── src
│   ├── components
│   │   ├── Header
│   │   │   ├── index.js
│   │   │   ├── styledComponents.js
│   │   ├── HomePage
│   │   │   ├── index.js
│   │   │   ├── styledComponents.js
│   │   ├── UserDetails
│   │       ├── index.js
│   │       ├── styledComponents.js
│   ├── context
│   │   ├── UsersContext.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md

How to Install

Copy the project:

git clone <repository-url>

Go to the project folder:

cd user-directory

Install everything the app needs:

npm install

Run the app:

npm start

How to Use

Home Page:

Type in the search bar to find a user.

Use the dropdown to sort users.

Click "Get Details" to see more about a user.

User Details Page:

Check all the info about the user.

Click "Go Back" to return to the home page.

Theme Switcher:

Click the button to change between light and dark mode.

Important Files and Folders

App.js

The main file that sets up the pages.

Gets user data from the API and shares it with the app.

UsersContext.js

Manages data and settings for the app.

Includes user list, theme settings, API status, and helper functions.

Header

Has the search bar, sorting menu, and theme button.

Appears on all pages.

HomePage

Shows the list of users.

Includes search, sorting, and error handling.

UserDetails

Displays full info about one user.

Lets you go back to the home page.

API Information

The app gets user info from this link:

https://jsonplaceholder.typicode.com/users

Method: GET

What You Get: A list of users with details like id, name, email, phone, company, and address.

Tools Used

React: For building the app.

react-router-dom: For moving between pages.

react-icons: For adding icons.

react-spinners: For showing loading animations.

Plans for the Future

Add pages to handle big user lists.

Make the design better and work well on all screens.

Add more ways to filter and sort users.

Write more tests to check the app works.
