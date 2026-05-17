// Middleware factory to validate request body using a Joi schema
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      // Collect all validation error messages
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      const validationError = new Error(errorMessage);
      validationError.statusCode = 400; // Bad Request
      return next(validationError); // Taps directly into errorHandler
    }
    
    next();
  };
};

module.exports = validate;