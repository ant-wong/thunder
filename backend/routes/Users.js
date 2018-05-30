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
  knex.select()
    .from('users')
    .where('id', req.params.id)
    .then((user) => {
      res.send(user)
    })
})

let tempArr = []

router.get('/pic', (req, res) => {
  res.json(tempArr)
})

// CREATE NEW USER
router.post('/artists', (req, res) => {
  console.log(req.body)
  tempArr.push(req.body.picture)
  res.send(tempArr)
  // const { email, username, password, title, genre } = req.body.values

  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(password, salt, (err, hash) => {
  //     knex('users')
  //       .insert({
  //         email: email,
  //         hashed_password: hash,
  //         username: username,
  //         title: title,
  //         genre: genre
  //       })
  //       .then(() => {
  //         knex.select()
  //           .from('users')
  //           .then((users) => {
  //             console.log(users)
  //           })
  //       })
  //     if (err) throw err
  //   })
  // })
})

// LOG IN
router.post('/login', (req, res) => {
  knex.select()
    .from('users')
    .where('username', req.body.values.username)
    .then((user) => {
      bcrypt.compare(req.body.values.password, user[0].hashed_password, function (err, response) {
        if (response) {
          res.send(response)
        } else {
          res.send(response)
        }
      })
    })
})

// UPDATE USER INFO
router.put('/artists/:id', (req, res) => {
  const { email, username, title, genre } = req.body.values
  knex('users').where('id', req.params.id)
    .update({
      email: email,
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