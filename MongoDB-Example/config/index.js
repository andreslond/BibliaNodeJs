if (process.env.NODE_ENV !== "production") {
    // This variable is setted by the provider of the hosting service. (Heroku, Azure, etc)
    require('dotenv').config();
    //If the .env file is located out o f the root folder, we need to put
    // the path in the config method as parameter.    
}

module.exports = {
    MONGO_URI: process.env.MONGO_URI
};
