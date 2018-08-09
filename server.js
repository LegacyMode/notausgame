const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log('Server running...')
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})
