const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

const { PORT } = require('./config/env.js')

const app = express();


connectDB();

app.use(express.json());

app.use(cors());
<<<<<<< HEAD
=======


>>>>>>> Yahia
//Routes 
const authRoutes = require('./routes/authRoutes.js')
app.use('/api/auth', authRoutes);


const errorMiddleware = require('./middleware/errorHandler.js');
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






