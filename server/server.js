require('dotenv').config();

const express = require('express');
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

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});