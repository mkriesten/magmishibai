const mongoose = require("mongoose")
let Schema = mongoose.Schema
const bcrypt = require("bcryptjs")

let userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  isListed: {
    type: Boolean,
    default: true,
  },
})

userSchema.methods.generatePasswordHash = (password) => {
  const saltRounds = 10
  var salt = bcrypt.genSaltSync(saltRounds)
  var hash = bcrypt.hashSync(password, salt)
  return hash
}

userSchema.methods.validatePassword = (password, hashedPassword) => {
  let res = bcrypt.compareSync(password, hashedPassword)
  return res
}

userSchema.statics.fillable = ["name", "email", "bio"]

userSchema.statics.returnable = [
  "_id",
  "name",
  "email",
  "bio",
  "token",
  "timestamps",
]

userSchema.statics.publicReturnable = ["_id", "name", "bio", "timestamps"]

let User = mongoose.model("user", userSchema)

module.exports = User
