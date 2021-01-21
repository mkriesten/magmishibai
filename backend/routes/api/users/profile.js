const express = require("express")
const router = express.Router()
const User = require("../../../models/user")
const { jwtauth } = require("../../../lib/jwtlib")
let _ = require("lodash")

router.get("/public/:userId", async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.params.userId,
    })
    res.status(200).json({
      data: _.pick(user, User.publicReturnable),
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: "Some error occured",
      err,
    })
  }
})

router.get("/", [jwtauth], async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.user._id,
    })
    console.log(user)
    res.status(200).json({
      data: _.pick(user, User.returnable),
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: "Some error occured",
      err,
    })
  }
})

router.put("/", [jwtauth], async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.user._id,
    })
    user = _.merge(user, _.pick(req.body, User.fillable))
    user = await user.save()
    user = _.pick(user, User.returnable)
    res.status(200).json({
      data: _.pick(user, User.returnable),
    })
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err,
    })
  }
})

module.exports = router
