const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const donationCenterSchema = new Schema( {
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    index: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address' ]
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
  capacityPerDay: {
    type: Number,
    default: 50,
    min: 1
  },
  openTime: {
    type: String,
    default: '07:00' // بصيغة 'HH:mm'
  },
  closeTime: {
    type: String,
    default: '18:00' // بصيغة 'HH:mm'
  }
}, {
  timestamps: true
} );

const DonationCenter = mongoose.model( 'DonationCenter', donationCenterSchema );
module.exports = DonationCenter;