require('dotenv').config();

const express = require('express');

const app = express();

// Middleware: this is triggered on every HTTP request to app, to help with debugging.
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'});
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});