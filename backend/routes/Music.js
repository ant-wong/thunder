const express = require('express')
      router = express.Router()

// GET ALL SONGS
router.get('/songs', (req, res) => {
  res.send('all the tunes bb')
})

// GET SINGLE SONG
router.get('/songs/:id', (req, res) => {
  res.send('just one rn pls')
})

// POST NEW SONG
router.post('/songs', (req, res) => {
  console.log(req.body, 'new song booiii')
})

// UPDATE SONG DETAILS
router.put('/songs/:id', (req, res) => {

})

// DELETE SONG
router.delete('/songs/:id', (req, res) => {

})

module.exports = router