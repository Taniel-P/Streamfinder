'use strict';

const router = require('express').Router();

const accountInfoController = require('../accountInfo/accountInfoController');

router.post('/getAccountInfo', accountInfoController.getUserInfo); // Return account data / settings
// router.put('/user', authController.putUser);   // Modify existing user account

module.exports = router;