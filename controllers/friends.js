import { Friend } from '../models/friend.js'


function index (req, res) {
  Friend.find({})
  .populate('owner')
  .then(friends => {
    res.json(friends)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Friend.create(req.body)
  .then(friend => {
    friend.populate('owner')
    .then(populatedFriend => {
      res.status(201).json(populatedFriend)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create,
}