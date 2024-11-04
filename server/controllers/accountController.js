const Account = require('../models/accountModel');

const addAccount = async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body;

    try {
        const account = await Account.create({firstName, lastName, email, username, password});
        res.status(200).json(account);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    };
};

module.exports = addAccount;