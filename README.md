# Bank-of-Flatiron
## Learning Goals
Implement a mini web app to practice on components, props, state, events and data fetching in react
## Introduction
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

## Requirements
For this project, you must:
+ Create a react app:
   + npx create-react-app my-app
   + cd my-app
   + npm start
+ In your project directory, create a db.json file and use this [data](https://docs.google.com/document/d/1EWN0qLfAWfgzO1N2P8H5WmrsTx0nMkhp3s-rXVESTNA/edit?usp=sharing) Links to an external site.for your server DB.
  + Run this command to get the backend started: json-server --watch db.json
+ Test your server by visiting this route in the browser: http://localhost:8001/transactions
+ Fetch data from a local server running JSON DB server.
+ [Semantic UI](https://semantic-ui.com/) for styling

## Core Deliverables
As a user, I can:

 + See a table of all transactions.
 + Fill out and submit the form to add a new transaction. This should add the new transaction to the table * the new transaction does not have to be persisted to the backend *
 + Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
## Bonus Deliverables
These bonus deliverables are here if you want an extra challenge and won't affect your score. Make sure to commit your work to save your progress before attempting the bonus deliverables!

As a user, I should be able to:

- Sort transactions alphabetically by category or description.

- Delete a transaction which will remove it from the table
## Installation
+ git clone git@github.com:Happiness-James/Bank-of-Flatiron.git
+ cd Bank-of-Flatiron.git
+ code .
