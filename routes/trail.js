const express = require('express');
const { addTrail, getTrail } = require('../controller/trail');

const router = express.Router();

router.get('/').get(getTrail);
router.post('/:id/addPost').post(addTrail);

module.exports = router;
