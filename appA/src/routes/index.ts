import express, { response } from 'express'
import User from '../models/user'

const router = express.Router()


router.get('/', (request, response, next) => {
  response.send('alright')
})

router.post('/', (request, response, next) => {
  const {first_name, last_name} = request.body
  console.log(first_name, last_name)
  const u = new User()
  // @ts-ignore
  u.first_name = first_name
  // @ts-ignore
  u.last_name = last_name
  u.save()
  .then(() => {
    response.sendStatus(200)
  })

})

export default router