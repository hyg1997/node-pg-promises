import express from 'express'
import db from '../queries'

const router = express.Router()

router.get('/api/catonies', db.getAllCatonies)

export default router