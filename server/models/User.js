const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        Lowercase: true,
    },

    password: {
        type: String,
        required: true,
        minlenght: 6,
    },

    bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    role: {
        type: String,
        enum: ['donor', 'admin'],
        default: 'donor',
    },
}, { timestamps: true });

<<<<<<< HEAD

=======
>>>>>>> Yahia
module.exports = mongoose.model('User', UserSchema);
