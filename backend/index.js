const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/twitter', (req, res) =>{
    res.send('welcometomyapp')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})