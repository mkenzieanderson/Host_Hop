const Item = require('../models/itemModel');

// Get all available items
const getAllItems = async (req, res) => {
    const items = await Item.find({});
    res.status(200).json(items);
}

// add a new item
const addItem = async (req, res) => {
    const {title, quantity, price, description, condition, category, seller} = req.body;

    try {
        const item = await Item.create({title, quantity, price, description, condition, category, seller});
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    };
};


module.exports = {
    getAllItems,
    addItem
};