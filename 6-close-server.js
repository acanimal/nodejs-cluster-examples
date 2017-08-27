const express = require('express')

const app = express()
let server

// Responds with Hello World or optionally the name you pass as path param
app.get('/hello/:name?', (req, res) => {
  const name = req.params.name

  if (name) {
    return res.send(`Hello ${name}!!!`)
  }

  return res.send('Hello World !!!')
})

app.get('/close', (req, res) => {
  console.log('Closing the server...')
  server.close(() => {
    console.log('--> Server call callback run !!')
  })
})

// Start server
server = app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
