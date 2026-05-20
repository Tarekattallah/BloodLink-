const Joi = require('joi');

// RegExp للتحقق من أن الـ ID الممرر هو Mongo ObjectId صحيح
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

const schemas = {
  // 1. فحص بيانات إنشاء مركز تتبرع
  createCenter: Joi.object({
    name: Joi.string().trim().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    phone: Joi.string().allow('', null),
    email: Joi.string().email().lowercase().trim().allow('', null),
    isActive: Joi.boolean().default(true),
    capacityPerDay: Joi.number().integer().min(1).default(50),
    openTime: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default('07:00').messages({
      'string.pattern.base': 'openTime must be in HH:mm format'
    }),
    closeTime: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default('18:00').messages({
      'string.pattern.base': 'closeTime must be in HH:mm format'
    })
  }),

  // 2. فحص بيانات حجز موعد
  bookAppointment: Joi.object({
    donor: Joi.string().regex(objectIdPattern).required().messages({ 'string.pattern.base': 'Invalid Donor ID' }),
    center: Joi.string().regex(objectIdPattern).required().messages({ 'string.pattern.base': 'Invalid Center ID' }),
    appointmentDate: Joi.date().greater('now').required().messages({ 'date.greater': 'Appointment date must be in the future' }),
    appointmentTime: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).required().messages({ 'string.pattern.base': 'appointmentTime must be in HH:mm format' }),
    notes: Joi.string().allow('', null)
  }),

  // 3. فحص تحديث حالة الموعد
  updateStatus: Joi.object({
    status: Joi.string().valid('scheduled', 'confirmed', 'completed', 'cancelled', 'no_show').required()
  }),

  // 4. فحص بيانات الفحص الطبي (Health Screening)
  submitScreening: Joi.object({
    weightKg: Joi.number().min(45).max(300).required(),
    hemoglobinLevel: Joi.number().min(0).required(),
    bloodPressureSys: Joi.number().min(60).max(220).required(),
    bloodPressureDia: Joi.number().min(40).max(140).required(),
    recentIllness: Joi.boolean().default(false),
    recentMedication: Joi.boolean().default(false),
    recentTravel: Joi.boolean().default(false),
    passedScreening: Joi.boolean().required()
  })
};

module.exports = schemas;