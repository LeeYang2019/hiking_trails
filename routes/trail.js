const express = require('express');
const { addTrail, getTrails } = require('../controller/trail');

const router = express.Router();

router.route('/').get(getTrails);
router.route('/addPost').post(addTrail);
//need to get for user
//need to patch
//need to delete
module.exports = router;
