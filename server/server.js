const express = require('express');
const app = express();
const env = require('dotenv');
const newUser = require('./users/user.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = mongoose.model("User");

env.config();
app.use(express.json());
app.use(bodyParser.json());

app.post('/form', async (req, res) => {
    
    try {
        const existingUser = await User.findOne({ email, number });
        if (existingUser || email || number) {
            return res.status(400).json({ message: 'Email/Contact Number already exist' });
        }

        // Create a new user
        const createUser = new User(
            firstName, lastName, birthDate, gender, bloodGroup, tShirtSize, category, email, number, emergencyContactNumber, emergencyName, relation, country, address
        );
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user' });
    }
});


// Server Connection
const PORT = process.env.PORT || 3000;

app.listen((PORT), () => {
    console.log(`Server started on port: ${PORT}`);
});