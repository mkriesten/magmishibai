// backend/index.js

const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const morgan = require("morgan")
const config = require("./config")
const taskCrud = require("./routes/api/tasks/crud")
const users = require("./routes/api/users")
const tasks = require("./mock")
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/tasks", taskCrud)
app.use("/users", users)
app.use(morgan("dev"))

mongoose.set("debug", true)
mongoose.connect(
  "mongodb+srv://" +
    config.mongodb.user +
    ":" +
    config.mongodb.pass +
    "@" +
    config.mongodb.url +
    "/" +
    config.mongodb.database,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
)

const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error"))
db.once("open", () => {
  app.listen(9000, () => {
    console.log("Running on port 9000")
  })
  const taskCollection = db.collection("tasks")
  taskCollection.estimatedDocumentCount((err, count) => {
    if (count) return
    taskCollection.insertMany(tasks)
  })
})
