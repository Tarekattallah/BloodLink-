const express = require('express');

const connectDB = require('./config/db.js');

const {PORT} = require('./config/env.js')

const app = express();

connectDB();

app.use(express.json());


//Routes 





app.listen(PORT, ()=> ){
    console.log(`server running on Port ${PORT}`);
    
};






