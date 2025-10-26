const express = require('express')

const app = express()
const PORT = 8080 // se poate folosi si un alt port, daca e nevoie (Ex: 3000)

app.use(express.static(__dirname + '/public'))

//Ruta Principala

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Ruta Ping

app.get('/ping', (req, res) => {
  res.send('Pong')
})


app.listen(8080)