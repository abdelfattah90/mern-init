import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('DB Connected...')
    })
    .catch(() => {
      console.log('DB Failed...')
    })
}

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI)
//     console.log('DB Connected...')
//   } catch (error) {
//     console.error('DB Failed...', error)
//   }
// }

export default connectDB
