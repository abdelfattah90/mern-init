import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('In the name of Allah the Merciful')
})

export default router
