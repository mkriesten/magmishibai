const express = require("express")
const router = express.Router()

const register = require("./register")
const login = require("./login")
const profile = require("./profile")

router.use("/register", register)
router.use("/login", login)
router.use("/profile", profile)

module.exports = router
