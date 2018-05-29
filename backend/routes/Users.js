const express = require('express')
      router = express.Router()
      fs = require('fs')
      
const bcrypt = require('bcrypt')

let testHash

// GET ALL USERS
router.get('/artists', (req, res) => {
  res.send('all them users')
})

// GET SINGLE USER
router.get('/artists/:id', (req, res) => {
  res.send('single user')
})

// CREATE NEW USER
router.post('/artists', (req, res) => {
  console.log(req.body, 'added user booooiii')
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.values.password, salt, (err, hash) => {
      // Store hash in your password DB.
      console.log(hash)
      testHash = hash
      if (err) throw err
    })
  })
})

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
router.put('/artists', (req, res) => {

})

// DELETE USER
router.delete('/artists/:id', (req, res) => {

})


module.exports = router