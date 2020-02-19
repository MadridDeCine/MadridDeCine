const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  email:String,
  path:String,
  meeting: [{ type: mongoose.Schema.ObjectId, ref: 'Meeting'}],
  favs: [{ type: mongoose.Schema.ObjectId, ref: 'Film'}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
