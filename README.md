# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

![](https://i.ibb.co/Fmt9Mq5/express.png)

## Learning Objectives

 - Explain the role of a web server in a full-stack application
 - Write a route handler for a GET request with Express
 - Pass information with query and route parameters
 
## Overview

[Express](http://expressjs.com) is a framework we'll use to create our json apis.

## Installing

To use Express, you'll add the package to a **project** with [npm](https://docs.npmjs.com/about-npm):

```
npm install express
```

## Express boilerplate

To use Express, we `require()` the package, create a new Express application object, and finally start the application "listening" on a specific port:

```js
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});
```

Our server won't do anything just yet, this is just boilerplate to use Express.


This way, whenever we run `npm start`, nodemon will run our Express server, and automatically restart it whenever we edit a file. Pretty darn cool!

## Our first route

In Express, you define a **route** in a `server.js` file. A route is a path the user makes an HTTP request for, such as GET `/`, and a handler function that takes care of that request.

```js
app.get('/', (req, res) => {
  res.send("Hello there!");
});
```

Whenever an HTTP request to `http://localhost:3000/` is made, the handler function is called. This function has access to two variables: `req` and `res` which represent the HTTP request (any information the user sent along to us) and the HTTP response.

You might end up doing a lot in these route handler functions. One thing they have to do is **send** an HTTP response back, which we're doing here with `res()`

When a user visits `http://localhost:3000/` in the browser, they'll see "Hello there!" displayed on the page. Note that if they go to `http://localhost:3000/news`, we see an error message "Cannot GET /news" because that's a different path that we haven't defined a route for.

## Running an Express server with [`nodemon`](https://nodemon.io)

A web server is a long-running process, which you could just run with `node server.js`. However, since you'll be editing the server files and continuously testing it, you would hae to stop the `node server.js` process and restart it after every change. 

Let's use a cool package `nodemon` instead. Add it to your project:

```
npm install nodemon -D
```

Then modify the `scripts` section in the `package.json` file to add a `start` script:

```
"scripts": {
  "start": "nodemon server.js"
}
```


## Exercise 1: Routes

In this exercise create routes for the following resources:

- https://localhost:3000/product
- https://localhost:3000/products

In the Express server in `server.js` define the following routes:

 - /product should return a product
 - /products should return multiple products (think an array of objects)

## Route parameters

If you consider two URLs:

 - https://localhost:3000/products/1
 - https://localhost:3000/products/2

When writing an Express route, you can access the dynamic parts of the path by declaring them as **route parameters**:

```js
app.get('/products/:id', (req, res) => {
  console.log(req.params);
  // { id: '1' }
});
```

In the path definition, add a colon before a meaningful name for the parameter. You'll have access to the dynamic value inside of the `req.params` object.

## Exercise 2: Route Parameters

Consider this array:

```js
const users = ['Sophia', 'Bob', 'Kim', 'John', 'Allan', 'Chloe', 'Jen', 'Ally', 'Ben']
```

1. In the server definition in `server.js`, create a route for the path `/users/:name`, so that a visitor could enter `/users/ben` or `/users/kim`. The server should respond "Ben is a user!" or "Ally is a user!" if the user does not exist, the server should respond "Who is Jimbo?" or "Who is Peter?"
1. Create a route for the path `/years/:year`, which would match `/years/2001` or `/years/2020`. If the year route parameter is a valid year, it should respond like this:
    - "2020 is this year!"
    - "2015 was 5 years ago"
    - "2022 is in 2 years"
    - "Nope, erfaderf is not a year"

## Code Walk-through

Go over the code in this repo.

## Deploying your server to the "cloud" aka Heroku

First install Heroku:

```
brew tap heroku/brew && brew install heroku
```

> Make sure you're on the master branch!

1. `heroku create your-heroku-app-name`
- this may prompt you to create an account with heroku. Please do so.
2. `git push heroku master`
- watch as heroku deploys your app

Your server is now deployed. You should have a URL similar to https://your-heroku-app-name.heroku.com

Open your browser and test it! Make sure your endpoints work.

**Thought Questions** 🤔

What happens when our data set increases in size? 10,000 products? 1,000,000 products? 1,000,000,000 products?

Is it still a viable solution to store our products in a JSON file? Is there a better way to store our data?
