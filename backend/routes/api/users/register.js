const User = require("../../../models/user")
const express = require("express")
const router = express.Router()
let _ = require("lodash")
const jwt = require("jsonwebtoken")
const config = require("../../../config")

router.post("/", async (req, res) => {
  try {
    console.log(req.body)
    let { name, email, password } = req.body
    let user = new User()
    user.name = name
    user.email = email
    user.password = user.generatePasswordHash(password)
    user = await user.save()
    user = _.pick(user, User.returnable)
    user.token = jwt.sign(
      {
        _id: user._id,
      },
      config.jwt.secret,
      {
        expiresIn: "10d",
      }
    )
    res.status(200).json({
      data: user,
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: "Some error occured",
      err,
    })
  }
})

module.exports = router
