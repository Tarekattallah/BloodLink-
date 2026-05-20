const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    lastName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true, 
        trim: true 
    },
    phone: { 
        type: String, 
        trim: true 
    },
    dateOfBirth: { 
        type: Date, 
        required: true 
    },
    bloodType: { 
        type: String,
        enum: ['A+','A-','B+','B-','AB+','AB-','O+','O-'] 
    },
    gender: { 
        type: String,
        enum: ['male','female'] 
    },
    address: {
        type: String 
    },
    city: { 
        type: String 
    },
    nationalId: { 
        type: String, 
        unique: true, 
        sparse: true 
    },
    isActive: { 
        type: Boolean, 
        default: true 
    },
    lastDonationDate: { 
        type: Date 
    },
    donations: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Donation' 
    }]
}, { timestamps: true });