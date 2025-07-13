import { expressjwt } from 'express-jwt'
import config from './config.js'  

const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  userProperty: 'auth'
})

export { requireSignin }