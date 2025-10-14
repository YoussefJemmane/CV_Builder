require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const resumeRoutes = require('./routes/resume')
const userRoutes = require('./routes/user')
const cors = require('cors')

// express app
const app = express()

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
}

// middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
 
// routes
app.use('/api/resumes', resumeRoutes)
app.use('/api/user', userRoutes)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    const PORT = process.env.PORT || 3000
    app.listen(PORT, '0.0.0.0', () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })