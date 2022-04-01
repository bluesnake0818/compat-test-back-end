import mongoose from 'mongoose'

const Schema = mongoose.Schema

const friendSchema = new Schema({
  name: {type: String, required: true},
  birthYear: {
    type: Number,
    min: 1900,
    max: 2020,
  },
  zodiac: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Friend = mongoose.model('Friend', friendSchema)

export {Friend}