const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  user: String,
  message: String,
  date: String,
  upvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model("Post", postSchema)