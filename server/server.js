import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('In the name of of Allah the Merciful')
})

// DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected...')
  })
  .catch(() => {
    console.log('DB Failed...')
  })

app.listen(process.env.PORT || 5000, () => console.log('App Running...'))
