
const express = require('express');
const router = express.Router();
const donationCenterController = require('../controllers/donationCenterController');
const validateRequest = require('../middlewares/validateRequest');
const schemas = require('../validations/centerAndAppointmentValidation');

router.route('/')
  // حطينا الـ validation هنا قبل الـ controller
  .post(validateRequest(schemas.createCenter), donationCenterController.createCenter)
  .get(donationCenterController.getAllCenters);

router.route('/:id')
  .get(donationCenterController.getCenterById)
  .put(validateRequest(schemas.createCenter), donationCenterController.updateCenter); // يمكن استخدام schema مخفف للـ Update لو تحب

module.exports = router;













