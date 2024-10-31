const express = require('express');

const router = express.Router();

// Get all available items on the home page
router.get('/', (req, res) => {
    res.json({mssg: 'GET all items'});
});


module.exports = router;