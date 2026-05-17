const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Appointment', 
    required: true, 
    unique: true 
  },
  donor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Donor', 
    required: true 
  },
  center: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'DonationCenter', 
    required: true 
  },
  processedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'AdminUser' 
  },
  donationDate: { 
    type: Date, 
    default: Date.now 
  },
  bloodType: { 
    type: String, 
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] 
  },
  volumeMl: { 
    type: Number, 
    required: true, 
    min: 100, 
    max: 600 
  },
  status: { 
    type: String, 
    default: 'collected',
    enum: ['collected', 'processing', 'approved', 'discarded'] 
  }
}, { timestamps: true });

const Donation= mongoose.model('Donation', donationSchema);
module.exports = Donation;