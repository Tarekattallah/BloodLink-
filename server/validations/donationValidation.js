const Joi = require('joi');

// Schema to validate the request body when creating a donation
const createDonationValidation = Joi.object({
  appointment: Joi.string()
    .hex()
    .length(24)
    .required()
    .messages({
      'string.length': 'Appointment ID must be a valid 24-character hex string',
      'any.required': 'Appointment ID is required'
    }),
    
  donor: Joi.string()
    .hex()
    .length(24)
    .required()
    .messages({
      'string.length': 'Donor ID must be a valid 24-character hex string',
      'any.required': 'Donor ID is required'
    }),
    
  center: Joi.string()
    .hex()
    .length(24)
    .required(),
    
  processedBy: Joi.string()
    .hex()
    .length(24)
    .optional(),
    
  donationDate: Joi.date()
    .max('now')
    .optional(),
    
  bloodType: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),
    
  volumeMl: Joi.number()
    .min(100)
    .max(600)
    .required(),
    
  status: Joi.string()
    .valid('collected', 'processing', 'approved', 'discarded')
    .default('collected')
});

module.exports = { createDonationValidation };