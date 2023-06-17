import express from 'express'
import { createUser } from './user.controller'
import reqValidate from '../../../middleware/reqValidate'
import { userZod } from './user.validation'
const router = express.Router()

router.route('/').post(reqValidate(userZod), createUser)

export default router
