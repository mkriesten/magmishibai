// models/task.js

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  headline: { type: String },
  text: { type: String },
  done: { type: Boolean },
  cadence: { type: String },
  ideas: [
    {
      _id: { type: mongoose.Types.ObjectId },
      date: { type: Date, default: Date.now },
      text: { type: String },
    },
  ],
})

module.exports = mongoose.model("Task", taskSchema)
