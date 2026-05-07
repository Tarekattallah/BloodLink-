const express = require('express');

const connectDB = require('./config/db.js');

const { PORT } = require('./config/env.js')

const app = express();

connectDB();

app.use(express.json());


//Routes 
const authRoutes = require('./routes/authRoutes.js')
app.use('/api/auth', authRoutes);


const errorMiddleware = require('./middleware/errorHandler.js');
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







