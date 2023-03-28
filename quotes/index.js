const express = require('express');
const server = express();
const { PORT } = require("./config");
const { HomeRoutes } = require('./routes');
const { QuotesRoutes } = require('./routes');
const { NotFoundMiddleware } = require("./middlewares");

//Pemrite que la carpeta public sea accedida libremente por el servidor.
server.use(express.static("./public")) 
//Convierte la petición en JSON
server.use(express.json()); 

//Path default routes
server.use('/', HomeRoutes);
//Path quotes 
server.use('/', QuotesRoutes);
//Path default
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Application running on PORT ${PORT}`);
});
