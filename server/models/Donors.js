const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        
    }
}, {timestamps: true})