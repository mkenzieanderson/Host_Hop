require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const itemsRoutes = require('./routes/items');
const accountsRoutes = require('./routes/accounts');

const app = express();

// Log every http request to server terminal
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/home', itemsRoutes);
app.use('/account', accountsRoutes);

// connect to database, then listen for HTTP requests
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to database. App listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    }); 