require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const resumeRoutes = require('./routes/resume')
const userRoutes = require('./routes/user')
const cors = require('cors')

// cors
// express app 
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/resumes', resumeRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    if (process.env.PORT) {
      app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
      })
    }
  })
  .catch((error) => {
    console.log(error)
  })

module.exports = app;