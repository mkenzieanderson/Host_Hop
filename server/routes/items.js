const express = require('express');
const axios = require('axios');
const router = express.Router();

const ITEMS_MICROSERVICE_URL = 'http://localhost:7017/items'

// Get all available items on the home page
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(ITEMS_MICROSERVICE_URL);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching items:', error.message);
        res.status(500).json({ error: 'Failed to fetch items.' });
    }
});

// add new item
router.post('/', async (req, res) => {
    try {
        const response = await axios.post(ITEMS_MICROSERVICE_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        console.error('Error adding item:', error.message);
        res.status(400).json({ error: 'Failed to add item.' });
    }
});


module.exports = router;