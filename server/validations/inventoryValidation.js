const Joi = require('joi');

// Schema to validate the request body when adding/updating inventory stock
const addInventoryValidation = Joi.object({
  center: Joi.string()
    .hex()
    .length(24)
    .required()
    .messages({
      'string.length': 'Center ID must be a valid 24-character hex string',
      'any.required': 'Center ID is required'
    }),
    
  bloodType: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),
    
  componentType: Joi.string()
    .valid('whole blood', 'plasma', 'platelets', 'red_cells', 'cryoprecipitate')
    .default('whole blood'),
    
  unitsAvailable: Joi.number()
    .min(0)
    .default(0)
    .messages({
      'number.min': 'Available units cannot be a negative number'
    }),
    
  expiryDate: Joi.date()
    .greater('now')
    .required()
    .messages({
      'date.greater': 'Expiry date must be a future date'
    }),
    
  status: Joi.string()
    .valid('available', 'reserved', 'expired', 'discarded')
    .default('available')
});

module.exports = { addInventoryValidation };