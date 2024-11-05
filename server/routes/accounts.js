const express = require('express');
const { 
    addAccount,
    validateEmail,
    validateUsername  
} = require('../controllers/accountController');

const router = express.Router();

router.post('/', addAccount);
router.post('/emails', validateEmail);
router.post('/usernames', validateUsername);

module.exports = router;