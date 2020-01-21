////////////////////////////////////////////////////////////////////////////
//   Project     : somaa-express-apis
//   File        : server.js
//   Description :
//      A module that creates the app server and handles its routes.
//   Created On  : 20/01/2020
//   Created By  : Ahmed Ismail
////////////////////////////////////////////////////////////////////////////
require('dotenv').config();
const mongoDB = require('./db/mongo-util');
const express = require('express');
const routes = require('./routes/router');


/*****************************Express Server*****************************/
const server = express();


/*****************************Middleware*****************************/
server.use(express.json());


/*****************************Routes*****************************/
server.use('/api', routes);


/*****************************Connect To MongoDB*****************************/
mongoDB.connectToServer((err) => {
    if(err){
        throw err;
    }
})


/*****************************Express Server Setup*****************************/
const PORT =process.env.PORT;



/*****************************Server Run*****************************/
server.listen(PORT, () => {
    console.log(`[+] Server is Live at localhost:${PORT}.`);
})