const express = require('express');
const server = express();
const cors = require('cors');
const { Technology } = require('../models');

//Use rquests as JSON
server.use(express.json());
//Set public files
server.use(express.static(__dirname + '/../public'));
//Allow connection with frontEnd
server.use(cors());

//Function to complete the path.
function completePath(technologies, protocol, host) {
    return technologies.map(technology => {
        technology.logo = `${protocol}://${host}/img/${technology.logo}`;
        return technology;
    });
}
//Create the test first endpoint
server.get('/api/technologies', async (req, res) => {
    let technologies = await Technology.find();
    const techList = completePath(technologies, req.protocol, req.headers.host);
    return res.send({ error: false, data: techList });
});

server.get('/api/technology/:id', async (req, res) => {
    const { id } = req.params;
    let technology = await Technology.findById(id);
    technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    return res.send({ error: false, data: technology });
});

server.get('/api/technology/search/:name', async (req, res) => {
    const { name } = req.params;
    let technologies = await Technology.find({
        name: { $regex: new RegExp(name, "i") }
    });

    const techList = completePath(technologies, req.protocol, req.headers.host);
    return res.send({ error: false, data: techList });
});

//Return the server without call it because it will be called in other file.
module.exports = server;

