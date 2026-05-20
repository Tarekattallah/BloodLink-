const express = require( 'express' );
const router = express.Router();
const appointmentController = require( '../controllers/appointmentController' );
const validateRequest = require( '../middlewares/validateRequest' );
const schemas = require( '../validations/centerAndAppointmentValidation' );

router.route( '/' )
  .post( validateRequest( schemas.bookAppointment ), appointmentController.bookAppointment )
  .get( appointmentController.getAppointments );

router.route( '/:id/status' )
  .put( validateRequest( schemas.updateStatus ), appointmentController.updateAppointmentStatus );

router.route( '/:id/screening' )
  .put( validateRequest( schemas.submitScreening ), appointmentController.submitHealthScreening );

module.exports = router;





























// const express = require('express');
// const router = express.Router();
// const appointmentController = require('../controllers/appointmentController');

// router.route('/')
//   .post(appointmentController.bookAppointment)      // POST /api/appointments (حجز موعد)
//   .get(appointmentController.getAppointments);       // GET /api/appointments (عرض وفلترة المواعيد)

// router.route('/:id/status')
//   .put(appointmentController.updateAppointmentStatus); // PUT /api/appointments/:id/status (تحديث الحالة)

// router.route('/:id/screening')
//   .put(appointmentController.submitHealthScreening);   // PUT /api/appointments/:id/screening (إضافة الفحص الطبي)

// module.exports = router;



