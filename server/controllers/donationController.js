const Donation = require('../models/Donation');
const Appointment = require('../models/Appointment');
const Donor = require('../models/Donation');

// Register a new blood donation record
const createDonation = async (req, res, next) => {
  try {
    const { appointment, donor } = req.body;

    // Verify that the specified appointment exists in the system
    const existingAppointment = await Appointment.findById(appointment);
    if (!existingAppointment) {
      const error = new Error('The specified appointment does not exist');
      error.statusCode = 404;
      return next(error);
    }

    // Verify that the specified donor profile exists
    const existingDonor = await Donor.findById(donor);
    if (!existingDonor) {
      const error = new Error('The specified donor record was not found');
      error.statusCode = 404;
      return next(error);
    }

    // Prevent duplicate donation entries linked to the same appointment
    const duplicateDonation = await Donation.findOne({ appointment });
    if (duplicateDonation) {
      const error = new Error('A donation has already been recorded for this appointment');
      error.statusCode = 400;
      return next(error);
    }

    // Persist the new donation (post-save hook handles donor updates if status is approved)
    const newDonation = new Donation(req.body);
    await newDonation.save();

    res.status(201).json({
      success: true,
      message: 'Donation recorded successfully',
      data: newDonation
    });
  } catch (error) {
    next(error);
  }
};

// Retrieve all donation records with populated references
const getAllDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find()
      .populate('donor')
      .populate('center')
      .populate('appointment');

    res.status(200).json({
      success: true,
      count: donations.length,
      data: donations
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDonation, getAllDonations };