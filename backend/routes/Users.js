const express = require('express')
      router = express.Router()

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
})

// UPDATE USER INFO
router.put('/artists', (req, res) => {

})

// DELETE USER
router.delete('/artists/:id', (req, res) => {

})


module.exports = router