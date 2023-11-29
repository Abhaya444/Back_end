const express = require("express");
const server = express();
const port = 3200;

//handle default request
//setting up the middle wires
function firstMiddlewire(req, res, next){
    console.log("This is first middlewire");
    next();
}

function secondMiddlewire(req, res, next){
    console.log("This is second middlewire.");
    next();
}

function globalMiddlewire(req, res, next){
    console.log("This is global midddlewire");
    next();
}
server.use(globalMiddlewire);
server.get("/",[firstMiddlewire,secondMiddlewire], (req, res) => {
    //set header type
    res.set('Content-Type', 'text/plain');
    res.send("Welcome to express server");
});

server.post("/", (req,res) =>{
    console.log("Post req received");
});

server.put("/", (req,res) =>{
    console.log("Put req received");
});

server.delete("/", (req,res) =>{
    console.log("Delete req received");
});





server.listen(3200, () =>{
    console.log("Server is running on port 3200");
})

