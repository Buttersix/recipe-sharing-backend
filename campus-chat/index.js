require('dotenv').config()
const serverless = require('serverless-http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// IMPORTED ROUTES
const postRoutes = require('./routes/posts')

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = process.env.MONGODB_URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/posts', postRoutes)

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports.handler = serverless(app)
