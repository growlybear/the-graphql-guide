const express = require('express')
const server = express()

const PORT = 3000

// get the mongoose models used for querying the db
const { User } = require('./models.js')

server.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    // db returned an error => 500
    if (err) {
      return res.status(500).end()
    }
    // user not found => 404
    // FIXME user is never found, even when querying with a valid _id
    if (!user) {
      return res.status(404).end()
    }
    // user found => 200, with user payload
    res.send(user)
  })
})

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`, )
})
