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
const server = app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

server.on('close', () => {
  console.log('--> Server closed !!')
})

process.on('exit', () => {
  console.log('-> Exit server')
})

process.on('SIGINT', () => {
  console.log('-> SIGINT received')
  server.close(() => {
    console.log('--> Server call callback run !!')
  })
})
