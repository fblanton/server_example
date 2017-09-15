var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()
var PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, function () {
  console.log("Listening on port: " + PORT)
})
