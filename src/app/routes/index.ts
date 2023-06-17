import express from 'express'
const router = express.Router()
import userRoute from '../modules/users/user.route'

const appRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
]

appRoutes.forEach(route => router.use(route.path, route.route))

export default router
