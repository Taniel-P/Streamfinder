'use strict';

const router = require('express').Router();


const mediaDetailController = require('../mediaDetail/mediaDetailController');

//router.post
//router.get

router.get('/userSubs', mediaDetailController.getUserSubscriptions); //Gets information for home page

module.exports = router;