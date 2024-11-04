const express = require('express');
const addAccount = require('../controllers/accountController');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: "Welcome to accounts page"});
});

router.post('/', addAccount);

module.exports = router;