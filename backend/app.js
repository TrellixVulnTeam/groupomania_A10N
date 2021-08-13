const express = require('express');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const fs = require('fs');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(helmet());

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;