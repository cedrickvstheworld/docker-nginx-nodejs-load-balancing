import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = new Schema({
  first_name: {type: String},
  last_name: {type: String},
})

export default mongoose.model('Users', schema)