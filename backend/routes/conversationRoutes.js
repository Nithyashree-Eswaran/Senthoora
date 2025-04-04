const express = require('express');
const { saveMessage } = require('../controllers/conversationController');
const router = express.Router();

router.post('/', saveMessage);

module.exports = router;