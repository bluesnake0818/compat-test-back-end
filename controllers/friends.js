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

function deleteFriend(req, res) {
  Friend.findByIdAndDelete(req.params.id)
  .then(friend => res.json(friend))
  .catch(err => res.json(err))
}

// function update(req, res) {
//   Friend.findByIdAndUpdate(req.params.id, req.body, {new: true})
//   .then(friend => res.json(friend))
//   .catch(err => res.json(err))
// }

function update(req, res) {
  Friend.findByIdAndUpdate(req.params.id, req.body, {new: true})
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

function show(req, res) {
  Friend.findById(req.params.id)
  .then(friend => res.json(friend))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  deleteFriend as delete,
  update,
  show,
}