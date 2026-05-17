const mongoose = require('mongoose');

const bloodInventorySchema = new mongoose.Schema({
  center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DonationCenter',
    required: true
  },
  bloodType: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  componentType: {
    type: String,
    default: 'whole blood',
    enum: ['whole blood', 'plasma', 'platelets', 'red_cells', 'cryoprecipitate']
  },
  unitsAvailable: {
    type: Number,
    default: 0,
    min: 0
  },
  expiryDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: 'available',
    enum: ['available', 'reserved', 'expired', 'discarded']
  }
}, { timestamps: true });

// no repeat for entring data
bloodInventorySchema.index(
  { center: 1, bloodType: 1, componentType: 1, expiryDate: 1 },
  { unique: true }
);


const BloodInventory = mongoose.model('BloodInventory', bloodInventorySchema);
module.exports = BloodInventory;