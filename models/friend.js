import mongoose from 'mongoose'

const Schema = mongoose.Schema

const friendSchema = new Schema({
  name: {type: String, required: true},
  // breed: {type: String, default: 'Mixed'},
  // age: {type: Number, default: 0},
  dob: {type: String, required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  // photo: {type: String}
}, {
  timestamps: true
})

const Friend = mongoose.model('Friend', friendSchema)

export {Friend}