const express = require('express')
      router = express.Router()
      knex = require('../knex')
      
const bcrypt = require('bcrypt')
      uuid = require('uuid/v4')


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
  console.log(req.params)
  knex.select()
    .from('users')
    .where('id', req.params.id)
    .then((user) => {
      res.send(user)
    })
})


// CREATE NEW USER
router.post('/artists', (req, res) => {
  console.log(req.body)
  const { email, username, password, title, genre, pic } = req.body.values

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      knex('users')
        .insert({
          email: email,
          hashed_password: hash,
          username: username,
          title: title,
          genre: genre,
          profilepic: pic
        })
        .then(() => {
          knex.select()
            .from('users')
            .where('username', username)
            .then((user) => {
              res.send(user)
            })
        })
      if (err) throw err
    })
  })
})

// LOG IN
router.post('/login', (req, res) => {
  // console.log(req.body)
  knex.select()
    .from('users')
    .where('username', req.body.values.username)
    .then((user) => {
      bcrypt.compare(req.body.values.password, user[0].hashed_password, function (err, response) {
        if (response) {
          res.send({
            response,
            user: user[0]
          })
          console.log('true')
        } else {
          res.send(response)
          console.log('false')
        }
      })
    })
})

// UPDATE USER INFO
router.put('/artists/:id', (req, res) => {
  const { email, username, title, genre, profilepic } = req.body.values
  console.log(req.body)
  knex('users').where('id', req.params.id)
    .update({
      email: email,
      username: username,
      title: title,
      genre: genre,
      profilepic: profilepic,
      logged_in: req.body.logged_in
    })
    .then(() => {
      knex.select()
        .from('users')
        .then((users) => {
          res.send(users[0])
        })
    })
})

// DELETE USER
router.delete('/artists/:id', (req, res) => {
  console.log(req.params.id)
  knex('users')
    .where('id', req.params.id)
    .del()
    .then((users) => {
      console.log(users)
    })
})


module.exports = router