# Shopping Cart

> A simple shopping website built with MERN stack (MongoDB, Express, React and Node).

![image](https://github.com/evyhsiao/shopping-cart/blob/master/productImg/shopping-cart-demo.gif)

## Features
- Product pagination
- Save Cart
- Delete Cart
- Choose quantity

## Technologies

#### Backend

- Express
- Mongoose
- Json Web Token (For authentication)

#### Frontend

- React JS
- Redux (Manage app state)
- React-router (To handle routing)
- Axios (For http requests)
- React Bootstrap

## Setup

To run this project, install it locally using npm:

```
$ npm i express mongoose dotenv
$ npm i --save-dev nodemon concurrently (to start client and server concurrently)
$ cd frontend
$ npx create-react-app .
$ npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension install frontend dependencies)
$ cd ..
$ npm run dataimport (to import data to mongoDB)
$ npm run dev (for both client and server side)
```
## ENV

Create a .env file in the root directory and add the following:

```
PORT = 5000
MONGO_URI = your mongodb uri
```

## Reference

This project refer to the following video tutorial: `https://youtu.be/0divhP3pEsg`
