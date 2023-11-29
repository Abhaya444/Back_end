
const express = require("express");

//create Server
const server = express();

//Handle default request
server.get("/", (req, res) => {
    res.send("Welcome to Express server");
})
const port = 8000;
//listen in specified port
server.listen(8000, () => {
    console.log("Server is running on 8000");
})
