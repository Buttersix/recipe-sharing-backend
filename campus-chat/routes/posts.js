const express = require('express')
const Post = require('../models/postMessage')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const postMessages = await Post.find()
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  const post = req.body
  const newPost = Post(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

module.exports = router