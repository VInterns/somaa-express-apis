////////////////////////////////////////////////////////////////////////////
//   Project     : somaa-express-apis
//   File        : router.js
//   Description :
//      A module that contains the app different routes.
//   Created On  : 20/01/2020
//   Created By  : Ahmed Ismail
////////////////////////////////////////////////////////////////////////////
const { Router } = require('express');
const {
    testRouter, 
    registerUser, 
    loginUser
} = require('../controllers/auth-controller');


/*****************************App Router*****************************/
const router = Router();


/*****************************API Routes*****************************/
//  @API            /test
//  @Description    tests our router 
router.route('/intern/test')
    .get(testRouter);


//  @API            /signup
//  @Description    inserts a user into the app db    
router.route('/intern/signup')
    .post(registerUser);


//  @API            /login
//  @Description    lets a user log into the app    
router.route('/intern/login')
    .post(loginUser);

//  @API            /edit
//  @Description    lets a user edits his/her info    
/* router.route('/intern/edit')
    .put(editUserInfo); */


/*****************************Export Module*****************************/
module.exports = router;