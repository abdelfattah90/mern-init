import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()
const port = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('In the name of of Allah the Merciful')
})

// DATABASE
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('DB Connected...')
  })
  .catch(() => {
    console.log('DB Failed...')
  })

app.listen(port, () => console.log('App Running...'))
