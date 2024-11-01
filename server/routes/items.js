const express = require('express');
const { 
    getAllItems,
    addItem 
} = require('../controllers/itemController');

const router = express.Router();

// Get all available items on the home page
router.get('/', getAllItems);

// add new item
router.post('/', addItem);


module.exports = router;