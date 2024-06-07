const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const cattleRoutes = require('./routes/cattle');

// Route middlewares
app.use('/api/user', authRoutes);
app.use('/api/cattle', cattleRoutes);

mongoose.connect('mongodb://localhost:27017/cattleMonitoring', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

app.listen(3000, () => console.log('Server up and running'));
