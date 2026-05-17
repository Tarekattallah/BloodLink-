const BloodInventory = require('../models/BloodInventory');
// const DonationCenter = require('../models/DonationCenter');

// Process inbound blood units (handles both new batches and continuous stock increments)
const addOrUpdateInventory = async (req, res, next) => {
  try {
    const { center, bloodType, componentType, expiryDate, unitsAvailable } = req.body;

    // Verify that the target donation center exists
    // const existingCenter = await DonationCenter.findById(center);
    // if (!existingCenter) {
    //   const error = new Error('The specified donation center does not exist');
    //   error.statusCode = 404;
    //   return next(error);
    // }

    // Guard clause against illegal negative stock values
    if (unitsAvailable !== undefined && Number(unitsAvailable) < 0) {
      const error = new Error('Available units cannot be a negative value');
      error.statusCode = 400;
      return next(error);
    }

    // Check for an identical batch matching the center, type, component, and expiration
    let existingBatch = await BloodInventory.findOne({
      center,
      bloodType,
      componentType,
      expiryDate
    });

    if (existingBatch) {
      // Batch exists: update and increment the existing stock capacity
      existingBatch.unitsAvailable += Number(unitsAvailable || 1);
      await existingBatch.save();

      return res.status(200).json({
        success: true,
        message: 'Inventory stock updated successfully',
        data: existingBatch
      });
    }

    // Batch does not exist: initialize a new batch tracking record
    const newInventory = new BloodInventory(req.body);
    await newInventory.save();

    res.status(201).json({
      success: true,
      message: 'New blood batch added to inventory',
      data: newInventory
    });
  } catch (error) {
    next(error);
  }
};

// Fetch the current global inventory status across all donation centers
const getInventory = async (req, res, next) => {
  try {
    const inventory = await BloodInventory.find().populate('center');
    
    res.status(200).json({
      success: true,
      count: inventory.length,
      data: inventory
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addOrUpdateInventory, getInventory };