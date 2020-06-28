// routes/api.js

const Task = require("../models/task")
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

router.post("/task/new", (req, res) => {
  Task.create(
    {
      _id: new mongoose.Types.ObjectId(),
      headline: req.body.headline,
      text: req.body.text,
      done: false,
      cadence: req.body.cadence,
    },
    (err, task) => {
      if (err) {
        console.log("CREATE error: " + err)
        res.status(500).send("Error")
      } else {
        res.status(200).json(task)
      }
    }
  )
})

router.get("/task/:_id", (req, res) => {
  Task.findById(req.params._id, (err, task) => {
    if (err) {
      console.log("RETRIEVE error: " + err)
      res.status(500).send("Error")
    } else if (task) {
      res.status(200).json(task)
    } else {
      res.status(404).send("Item not found")
    }
  })
})

router.put("/task/:_id", (req, res) => {
  Task.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.params._id),
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send("Error")
      } else if (task) {
        res.status(200).json(task)
      } else {
        res.status(404).send("Item not found")
      }
    }
  )
})

// is that really necessary? this is basically the same as the previous put, but I want to push
// to an array instead of just updating the document. if I don't add the specific $push, all other ideas
// get overwritten
router.put("/task/:_id/ideas", (req, res) => {
  Task.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.params._id),
    { $push: { ideas: { text: req.body.ideas[0].text } } },
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send("Error")
      } else if (task) {
        res.status(200).json(task)
      } else {
        res.status(404).send("Item not found")
      }
    }
  )
})

router.delete("/task/:_id", (req, res) => {
  Task.findByIdAndRemove(req.params._id, (err, task) => {
    if (err) {
      console.log("DELETE error: " + err)
      res.status(500).send("Error")
    } else {
      res.status(200).json(task)
    }
  })
})

router.get("/tasks", (req, res) => {
  Task.find({}, (err, t) => {
    if (err) {
      console.log("RETRIEVE error: " + err)
      res.status(500).send("Error")
    } else if (t) {
      res.status(200).json(t)
    }
  })
})

module.exports = router
