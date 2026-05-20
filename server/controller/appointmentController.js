const Appointment = require('../models/Appointment');

// 1. حجز موعد جديد
exports.bookAppointment = async (req, res) => {
  try {
    const { donor, center, appointmentDate, appointmentTime, notes } = req.body;
    
    const newAppointment = new Appointment({
      donor,
      center,
      appointmentDate,
      appointmentTime,
      notes
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json({ success: true, data: savedAppointment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 2. جلب المواعيد (مع عمل Populate لبيانات المتبرع والمركز لرؤية تفاصيلهم الكاملة)
exports.getAppointments = async (req, res) => {
  try {
    const filters = {};
    if (req.query.status) filters.status = req.query.status;
    if (req.query.center) filters.center = req.query.center;
    if (req.query.donor) filters.donor = req.query.donor;

    const appointments = await Appointment.find(filters)
      .populate('donor', 'firstName lastName email phone bloodType') // جلب حقول محددة من المتبرع
      .populate('center', 'name address city');                     // جلب حقول محددة من المركز
      
    res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 3. تحديث حالة الموعد (مثل: من scheduled إلى confirmed أو cancelled)
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ success: false, error: 'Appointment not found' });
    }

    res.status(200).json({ success: true, data: updatedAppointment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 4. إضافة أو تحديث الفحص الطبي (Health Screening) المضمن داخل الموعد
exports.submitHealthScreening = async (req, res) => {
  try {
    const { 
      weightKg, hemoglobinLevel, bloodPressureSys, bloodPressureDia, 
      recentIllness, recentMedication, recentTravel, passedScreening 
    } = req.body;

    // بناء كائن الفحص الطبي وتحديد وقت الفحص تلقائياً
    const healthScreeningData = {
      weightKg,
      hemoglobinLevel,
      bloodPressureSys,
      bloodPressureDia,
      recentIllness,
      recentMedication,
      recentTravel,
      passedScreening,
      screenedAt: new Date()
    };

    // تحديث حقل الـ healthScreening داخل الموعد المحدد
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { healthScreening: healthScreeningData },
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ success: false, error: 'Appointment not found' });
    }

    res.status(200).json({ success: true, data: updatedAppointment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};