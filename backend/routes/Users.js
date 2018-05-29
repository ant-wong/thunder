const express = require('express')
      router = express.Router()
      fs = require('fs')
      knex = require('../knex')
      
const bcrypt = require('bcrypt')

let testHash

// GET ALL USERS
router.get('/artists', (req, res) => {
  knex.select()
    .from('users')
    .then((users) => {
      res.send(users)
    })
})

// GET SINGLE USER
router.get('/artists/:id', (req, res) => {
  knex.select()
    .from('users')
    .where('id', req.params.id)
    .then((user) => {
      res.send(user)
    })
})

// CREATE NEW USER
router.post('/artists', (req, res) => {
  const { email, username, password, title, genre } = req.body.values

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      // Store hash in your password DB.
      knex('users')
        .insert({
          email: email,
          hashed_password: hash,
          username: username,
          title: title,
          genre: genre
        })
        .then(() => {
          knex.select()
            .from('users')
            .then((users) => {
              console.log(users)
            })
        })
      if (err) throw err
    })
  })
})

// LOG IN
router.post('/login', (req, res) => {
  console.log(req.body)
  bcrypt.compare(req.body.values.password, testHash, function (err, res) {
    if (res) {
      console.log('nice')
    } else {
      console.log('noooo')
    }
  })
})

// UPDATE USER INFO
router.put('/artists/:id', (req, res) => {
  console.log(req.body, req.params.id)
  knex('users').where('id', req.params.id)
    .update({
      title: req.body.values.title,
      genre: req.body.values.genre
    })
    .then(() => {
      knex.select()
        .from('users')
        .then((users) => {
          console.log(users)
        })
    })
})

// DELETE USER
router.delete('/artists/:id', (req, res) => {

})


module.exports = router