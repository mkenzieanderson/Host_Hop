const express = require('express');
const Item = require('../models/itemModel');

const router = express.Router();

// Get all available items on the home page
router.get('/', (req, res) => {
    res.json({mssg: 'GET all items'});
});

// practice posting to the mongo database via postman
router.post('/', async (req, res) => {
    const {title, quantity, price, description, condition, category, seller} = req.body;

    try {
        const item = await Item.create({title, quantity, price, description, condition, category, seller});
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    };
});


module.exports = router;