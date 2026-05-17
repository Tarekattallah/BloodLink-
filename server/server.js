const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const { PORT } = require('./config/env.js');

// Import Routes
const authRoutes = require('./routes/authRoutes.js');
const donationRoutes = require('./routes/donationRoutes.js');
const inventoryRoutes = require('./routes/inventoryRoutes.js');

// Import Middlewares
const errorMiddleware = require('./middleware/errorHandler.js');

const app = express();

// Initialize Database Connection
connectDB();

// Global Middlewares
app.use(express.json());
app.use(cors());

// API Routes Mounting
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/inventory', inventoryRoutes);

// Global Error Handling Middleware (Must be mounted last)
app.use(errorMiddleware);

// Start Server Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});