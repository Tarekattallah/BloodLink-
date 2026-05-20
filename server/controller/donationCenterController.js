const DonationCenter = require('../models/DonationCenter');

// 1. إنشاء مركز تبرع جديد
exports.createCenter = async (req, res) => {
  try {
    const newCenter = new DonationCenter(req.body);
    const savedCenter = await newCenter.save();
    res.status(201).json({ success: true, data: savedCenter });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// 2. جلب جميع مراكز التبرع (مع إمكانية الفلترة حسب المدينة أو حالة النشاط)
exports.getAllCenters = async (req, res) => {
  try {
    const filters = {};
    if (req.query.city) filters.city = req.query.city;
    if (req.query.isActive) filters.isActive = req.query.isActive === 'true';

    const centers = await DonationCenter.find(filters);
    res.status(200).json({ success: true, count: centers.length, data: centers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 3. جلب مركز تبرع معين بواسطة الـ ID
exports.getCenterById = async (req, res) => {
  try {
    const center = await DonationCenter.findById(req.params.id);
    if (!center) {
      return res.status(404).json({ success: false, error: 'Donation center not found' });
    }
    res.status(200).json({ success: true, data: center });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 4. تحديث بيانات مركز التبرع
exports.updateCenter = async (req, res) => {
  try {
    const updatedCenter = await DonationCenter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCenter) {
      return res.status(404).json({ success: false, error: 'Donation center not found' });
    }
    res.status(200).json({ success: true, data: updatedCenter });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};