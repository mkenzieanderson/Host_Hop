require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const itemsRoutes = require('./routes/items');

const app = express();

// Middleware: this is triggered on every HTTP request to app, to help with debugging.
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/home', itemsRoutes);

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

// mongo db password: 7hN6apFWp8sPpDs9