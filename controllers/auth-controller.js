////////////////////////////////////////////////////////////////////////////
//   Project     : somaa-express-apis
//   File        : auth-controller.js
//   Description :
//      A module that contains the implementations to the app APIs.
//   Created On  : 20/01/2020
//   Created By  : Ahmed Ismail
////////////////////////////////////////////////////////////////////////////
const {getDB} = require('../db/mongo-util');



//  @API-Method     /test => testRouter
const testRouter = function(req, rep){
    rep.json({
        "Message": "Congrats!! Your First API Works!!"
    })
}

//  @API-Method     /signup => registerUser
const registerUser = function(req, rep){

    // retrieve database instance
    var db = getDB();

    // retrieve request body & handle it
    var objectToHandle = req.body;
    
    // insert retrieved object into MongoDB
    db.collection('interns').insertOne(objectToHandle, (err) => {
        
        // failed to insert an object
        if(err){
            console.log("[-] Couldn't Insert Object.\n[Error Details] ", err);
        }

        // object inserted successfully
        console.log("[+] Object successfully inserted into DB.")
        rep.json({
            "Message": "Object successfully inserted into DB."
        });

    });
}


//  @API-Method     /login => loginUser
const loginUser = function(req, rep){

    // retrieve database instance
    var db = getDB();

    // retrieve request body & handle it
    var objectToHandle = req.body;
    
    // search for an object in MongoDB
    db.collection('interns').findOne({"name": objectToHandle.name}, (err, user) => {
        
        // failed to find the object
        if(err){
            console.log("[-] Couldn't Find Object in Database.\n[Error Details] ", err);
        }

        // object successfully found
        console.log("[+] Object successfully found into DB.")
        rep.json({
            "name": user.name,
            "_Id": user._id,
            "loggedIn": true
        })

    })
}



/*****************************Export Module*****************************/
module.exports = {
    testRouter, 
    registerUser, 
    loginUser
};