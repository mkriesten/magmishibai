# magmishibai

> digital kamishibai board by mkr

This application is currently being built. It's my first ever GitHub project.
magmishibai consists of nuxt.js and bootstrap-vue so far. It uses vuex for state management and a tiny API that comes in the "backend" folder as an extra node project.

"backend" accesses a local MongoDB instance, which is not part of this project. You need to download, install and launch MongoDB in addition. If no collection is available in MongoDB, a tiny set of standard data will be created in a collection called "tasks".

I am looking for better ways to set this up. Help/contribution appreciated :)

## Build Setup
In the project's root folder:
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

In "backend" folder:
```bash
# install dependencies
$ npm install

# start backend API
$ npm run dev
