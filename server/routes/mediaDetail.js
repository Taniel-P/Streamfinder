'use strict';

const router = require('express').Router();


const mediaDetailController = require('../mediaDetail/mediaDetailController');

//router.post
//router.get

router.get('/userSubs', mediaDetailController.getUserSubscriptions);
router.get('/mediaDetails', mediaDetailController.getMediaDetails);

module.exports = router;