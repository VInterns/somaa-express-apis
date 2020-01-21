////////////////////////////////////////////////////////////////////////////
//   Project     : somaa-express-apis
//   File        : mongo-util.js
//   Description :
//      A module that has functions to connect to mongo and return
//      a mongo database instance.
//   Created On  : 20/01/2020
//   Created By  : Ahmed Ismail
////////////////////////////////////////////////////////////////////////////
const {MongoClient} = require('mongodb');


/*****************************MongoDB Setup*****************************/
const MONGO_URI = process.env.DB_HOST;              // MongoDB sever Uri
const DB_NAME = process.env.DB_NAME;                // Database Name


var _db;                                      // MongoDB Instance to return
/*****************************MongoDB Methods*****************************/

//  @Method         connectToServer
//  @Description    connects a server to a MongoDB Client
const connectToServer = function(callback) {

    try{

        // connecting to the mongodb server
        MongoClient.connect(MONGO_URI, {useUnifiedTopology: true}, (err, client) => {

            // failed to connect to monogdb server
            if(err){
                console.log("[-] Faild to Connect to Mongo Server.\n[Error Details] ", err);
            }

            // successfully connected to mongodb server
            console.log("[+] Successfully Connected to MongoDB Client.");

            // connect to the desired database
            _db = client.db(DB_NAME);
            console.log(`[+] Database Connected to: ${DB_NAME}`);

            // return error
            return callback(err);

        })
    } catch (e) {           // catch exceptions & handle them here

        console.log("[Error Details]", e);
    }

}


//  @Method         getDB
//  @Description    returns a Mongo Database Instance
const getDB = function () {
    return _db;
}



/*****************************Export Module*****************************/
module.exports = {connectToServer, getDB};