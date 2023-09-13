import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

import route from './routes/route.js'
import connectDB from './config/db.js'

const app = express()
dotenv.config()

// MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// ROUTES
app.use('/', route)

// DATABASE
connectDB()

app.listen(process.env.PORT || 5000, () => console.log('App Running...'))
