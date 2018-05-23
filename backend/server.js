const express = require('express')
      bodyParser = require('body-parser')
      port = 6060 || process.argv[2]
      app = express()

// ROUTES
const Users = require('./routes/Users')
const Songs = require('./routes/Songs')
      
// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

app.use('/', Users, Songs)

app.listen(port, () => {
  console.log(`Tune in on port ${port}`)
})