const express = require('express');
const router = express.Router();
const { createDonation, getAllDonations } = require('../controllers/donationController');
const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');
const { createDonationValidation } = require('../validations/donationValidation');

// Protected and Validated Route
router.post('/', authMiddleware, validate(createDonationValidation), createDonation);
router.get('/', authMiddleware, getAllDonations);

module.exports = router;