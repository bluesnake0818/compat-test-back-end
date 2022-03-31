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
  // breed: {type: String, default: 'Mixed'},
  // age: {type: Number, default: 0},
  // photo: {type: String}
}, {
  timestamps: true
})

const Friend = mongoose.model('Friend', friendSchema)

export {Friend}

// birthYear: {
//   type: String,
//   enum: ["1980", "1981", "1982", "1983", "1984",
//   "1985", "1986", "1987", "1988", "1989", "1990",
//   "1991", "1992", "1993", "1994", "1995", "1996",
//   "1997", "1998", "1999", "2000", "2001", "2002",
//   "2003", "2004", "2005", "2006", "2007", "2008",
//   "2009", "2010", "2011", "2012", "2013", "2014",
//   "2015", "2016", "2017", "2018", "2019", "2020",
//   ]
// },