const joi = require("joi")

const donorSchema = joi.object({
    firstName: joi.string().required().lowercase().trim(),
    lastName: joi.string().required().trim(),
    email: joi.string().email().required().lowercase(),
    phone: joi.number().min(11),
    dateOfBirth: joi.date().default(Date.now()),
    bloodType: joi.string().required(),
    gender: joi.string().valid("Male","Female").default("Male"),
    address: joi.string().required(),
    city: joi.string(),
    nationalId: joi.number(16).required(),
    lastDonationDate: joi.Date().required()
})

module.exports = {donorSchema}