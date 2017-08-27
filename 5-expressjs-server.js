const express = require('express')

const app = express()

// Responds with Hello World or optionally the name you pass as path param
app.get('/hello/:name?', function (req, res) {
  const name = req.params.name

  if (name) {
    return res.send(`Hello ${name}!!!`)
  }

  return res.send('Hello World !!!')
})

// Start server
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
