const mongoose = require('mongoose');

// Define the schema with comprehensive validation and security measures
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    birthDate: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value instanceof String && !isNaN(value),
        }
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
        validate(value) {
            if (!value.match(/^[a-zA-Z -]+$/)) {
                throw new Error('Gender must contain only letters, spaces, or hyphens.');
            }
        }
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    tShirtSize: {
        type: String,
        required: true,
        size: ['S', 'M', 'L', 'XL', '2XL'],
    },
    category1: {
        type: Boolean,
    },

    category2: {
        type: Boolean,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        uppercase: false,
        validate: {
            validator: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid Email Id',
        },
    },
    number: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 13,
        validate: {
            validator: (value) => {
                const validPhoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s\./0-9]{8,15}$/;
                return validPhoneRegex.test(value);
            },
            message: 'Invalid phone number format',
        }
    },
    emergencyContactNumber: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                const validPhoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s\./0-9]{8,15}$/;
                return validPhoneRegex.test(value);
            },
            message: 'Invalid phone number format',
        }
    },
    emergencyName: {
        type: String,
        required: true,
    },
    relation: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    address: {
        streetAddress: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        }
    }
});

// Export the Mongoose model
module.exports = userSchema;
