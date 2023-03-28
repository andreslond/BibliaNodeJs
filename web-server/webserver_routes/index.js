const express = require("express");
const server = express();

const fs = require("fs");
const port = 4002;

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.get('/', getHomePage);

server.get('/about', (req, res) => {
    res.write(about);
});

server.listen(port, () => {
    console.log("Server Running on port:" + port);
});

function getHomePage(req, res) {
    return res.write(home);
}

//HTTP Methods

// GET -> Obtener información
// POST -> Create a new resource
// PUT -> Modify resources
// PATCH -> Modify a element of a resource.
// DELETE -> Delete a resource.