const jwt = require("jsonwebtoken")
const User = require("../models/user")
const config = require("../config")
const _ = require("lodash")

// let verifyToken = (token, next) => {
let verifyToken = (token) => {
  try {
    var decoded = jwt.verify(token, config.jwt.secret)
    return { ...decoded, expired: false }
  } catch (err) {
    if (err) {
      if (err.name === "TokenExpiredError") {
        decoded = jwt.decode(token)
        if (decoded) {
          return { ...decoded, expired: true }
        } else return false
      } else return false
    }
  }
}

let tokenValidation = async (req, res, next) => {
  let token = req.headers["authorization"].replace("Bearer ", "")
  if (token) {
    req.token = token
    try {
      const decodedToken = verifyToken(req.token, next)
      console.log(decodedToken)
      if (!decodedToken) {
        res.status(400).json({
          status: 400,
          message: "User does not have token",
        })
      } else if (decodedToken.expired) {
        let decoded = jwt.decode(token)

        let user = await User.findOne({
          _id: decoded.id,
        })

        user.token = jwt.sign(
          {
            id: user._id,
          },
          config.jwt.secret,
          {
            expiresIn: "20s",
          }
        )
        req.user = { user, userType: decoded.userType }
        next()
      } else {
        let user = await User.findOne({
          _id: decodedToken.id,
        })
        user.token = req.token
        req.user = _.pick(user, User.returnable)
        next()
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: "Error with your token",
      })
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "User does not have  token",
    })
  }
}

module.exports.jwtauth = tokenValidation
