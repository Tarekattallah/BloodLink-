const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

// 1. تعريف المخطط الفرعي للفحص الطبي (لا يحتاج معرف ID مستقل)
const healthScreeningSchema = new Schema( {
  weightKg: {
    type: Number,
    min: 45,
    max: 300
  },
  hemoglobinLevel: {
    type: Number,
    min: 0
  },
  bloodPressureSys: {
    type: Number,
    min: 60,
    max: 220
  },
  bloodPressureDia: {
    type: Number,
    min: 40,
    max: 140
  },
  recentIllness: {
    type: Boolean,
    default: false
  },
  recentMedication: {
    type: Boolean,
    default: false
  },
  recentTravel: {
    type: Boolean,
    default: false
  },
  passedScreening: {
    type: Boolean,
    default: false
  },
  screenedAt: {
    type: Date,
    default: Date.now
  }
}, {
  _id: false // إلغاء الـ ID التلقائي للوثيقة المضمنة منعاً لتضخم البيانات
} );

// 2. مخطط المواعيد الأساسي بروابط مرجعية (ObjectId References)
const appointmentSchema = new Schema( {
  donor: {
    type: Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
    index: true
  },
  center: {
    type: Schema.Types.ObjectId,
    ref: 'DonationCenter',
    required: true,
    index: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  appointmentTime: {
    type: String,
    required: true // بصيغة 'HH:mm'
  },
  status: {
    type: String,
    default: 'scheduled',
    enum: [ 'scheduled', 'confirmed', 'completed', 'cancelled', 'no_show' ]
  },
  notes: {
    type: String
  },
  healthScreening: {
    type: healthScreeningSchema,
    default: null
  }
}, {
  timestamps: true
} );

const Appointment = mongoose.model( 'Appointment', appointmentSchema );
module.exports = Appointment;