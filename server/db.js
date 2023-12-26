const env = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/user');

// DB Connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>
        console.log('Connected to MongoDB'))
    .catch(err =>
        console.error('Error connecting to MongoDB:', err));
