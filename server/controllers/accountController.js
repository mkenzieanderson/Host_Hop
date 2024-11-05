const Account = require('../models/accountModel');
const bcrypt = require('bcryptjs');

const addAccount = async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body;

    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const account = await Account.create({
            firstName, 
            lastName, 
            email, 
            username, 
            password: encryptedPassword
        });
        res.status(200).json(account);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    };
};

const validateEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const emails = await Account.find({email}, 'email');
        if (emails.length > 0) {                        // Email already exists in system
            res.status(200).json({ valid: false });     
        } else {
            res.status(200).json({ valid: true });      
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const validateUsername = async (req, res) => {
    const { username } = req.body;

    try {
        const usernames = await Account.find({username}, 'username');
        console.log(username);
        if (usernames.length > 0) {                        // username already exists in system
            res.status(200).json({ valid: false });     
        } else {
            res.status(200).json({ valid: true });      
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {addAccount, validateEmail, validateUsername};