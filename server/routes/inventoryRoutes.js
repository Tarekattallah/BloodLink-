const express = require('express');
const router = express.Router();
const { addOrUpdateInventory, getInventory } = require('../controllers/inventoryController');
const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');
const { addInventoryValidation } = require('../validations/inventoryValidation');

// Protected and Validated Route
router.post('/', authMiddleware, validate(addInventoryValidation), addOrUpdateInventory);
router.get('/', authMiddleware, getInventory);

module.exports = router;