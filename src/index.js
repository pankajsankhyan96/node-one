var http = require('http')
var express = require('express')
var app = express()
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.end("Hello, This is my first node project, running on Port : " + PORT);
})

app.listen(PORT, () => {
    console.log("The server is running on port : " + PORT)
})