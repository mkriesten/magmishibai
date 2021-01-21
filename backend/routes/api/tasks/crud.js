// routes/api.js

const Task = require("../../../models/task")
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

router.post("/new", (req, res) => {
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

router.get("/:_id", (req, res) => {
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

router.put("/:_id", (req, res) => {
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
router.put("/:_id/add/ideas", (req, res) => {
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

router.delete("/:_id", (req, res) => {
  Task.findByIdAndRemove(req.params._id, (err, task) => {
    if (err) {
      console.log("DELETE error: " + err)
      res.status(500).send("Error")
    } else {
      res.status(200).json(task)
    }
  })
})

// is that really necessary? this is basically the same as the previous put, but I want to pull
// from an array instead of just updating the document.
router.put("/:_id/delete/ideas", (req, res) => {
  Task.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.params._id),
    {
      $pull: {
        ideas: {
          _id: mongoose.Types.ObjectId(req.body.ideas[0]._id),
          text: req.body.ideas[0].text,
        },
      },
    },
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

router.get("/", (req, res) => {
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
