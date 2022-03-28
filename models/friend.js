import mongoose from 'mongoose'

const Schema = mongoose.Schema

const friendSchema = new Schema({
  name: {type: String, required: true},
  birthYear: {type: String, required: true},
  zodiac: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  // breed: {type: String, default: 'Mixed'},
  // age: {type: Number, default: 0},
  // photo: {type: String}
}, {
  timestamps: true
})

const Friend = mongoose.model('Friend', friendSchema)

export {Friend}