require("dotenv").config(); // ✅ مهم جدًا

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

app.use(express.json());

// Routes 
const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);

const errorMiddleware = require('./middleware/errorHandler.js');
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});