const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: false });
    
    if (error) {
      // تجميع كل الأخطاء وإرسالها بشكل واضح للفرونت إند
      const errors = error.details.map(detail => detail.message);
      return res.status(400).json({ success: false, errors });
    }
    
    next();
  };
};

module.exports = validateRequest;