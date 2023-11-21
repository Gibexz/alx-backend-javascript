const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ls', (req, res) => {
    res.send('Hello World! with ls')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})