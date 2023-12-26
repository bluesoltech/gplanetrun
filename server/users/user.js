const mongoose = require('mongoose');
const userSchema = require('../models/model.js');
const User = mongoose.model('User', userSchema);
const app = require('express')();

// Create a new user instance
const newUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const birthDate = req.body.birthDate;
    const gender = req.body.gender;
    const bloodGroup = req.body.bloodGroup;
    const tShirtSize = req.body.tShirtSize;
    const category = req.body.category;
    const email = req.body.email;
    const number = req.body.number;
    const emergencyContactNumber = req.body.emergencyContactNumber;
    const emergencyName = req.body.firstName;
    const relation = req.body.relation;
    const country = req.body.firstName;
    const street = req.body.street;
    const city = req.body.city;
    const state = req.body.state;
    const postalCode = req.body.postalCode;
    const address = [street, city, state, postalCode]
        // Save the user to the database
        .save()
        .then(() => console.log('User created successfully!'))
        .catch((err) => console.error('Error creating user'));
};

module.exports = newUser;