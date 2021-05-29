# magmishibai

> digital kamishibai board by mkr

This application is currently being built. It's my first ever GitHub project.
magmishibai consists of nuxt.js and bootstrap-vue so far. It uses vuex for state management and a tiny API that comes in the `backend` folder as an extra node project.

`backend` uses MongoDB Atlas per default. Just make sure to enter your configuration data in `backend\config.js`. You can use `backend\config.js.example` as a template. If no collection is available in MongoDB, a tiny set of standard data will be created in a collection called "tasks".

I am looking for better ways to set this up. Help/contribution appreciated :)

![magmishibai-screenshot](https://user-images.githubusercontent.com/64888136/105358402-6afd4e00-5bf6-11eb-8d92-8cef0f0915fb.PNG)

## Setup

### Frontend

In the project's root folder:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### Backend

No specific setup is required for the frontend. Make sure to enter your configuration data in `backend\config.js`. A secret for registration/login tokens is required,

In `backend` folder:

```bash
# install dependencies
$ npm install

# start backend API
$ npm run dev
```

# Configuration & additional information

You will need to enter a secret for token based authentication in `backend\config.js` as well as configuration data for connecting to MongoDB Atlas. Please make sure your file is saved with restrictive access rights. An example configuration file is stored in `backend\config.js.example`.

A new user needs to be registered at the previously mentioned MongoDB `backend` before login and access to the kamishibai board is possible.
