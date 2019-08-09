import express from 'express'

import mongoose from 'mongoose'
import indexRouter from './routes/index'


const app = express()

mongoose.connect('mongodb://mongo:27017/test_db', {useNewUrlParser: true})
  .then(() => {
    console.log('alright . . .')
    console.log('connected to mongodb')
  })
  .catch((error) => {
    console.log('error: ', error)
  })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', indexRouter)

app.listen(3000, () => {
  console.log(`server listening on port 3000. . .`)
})

