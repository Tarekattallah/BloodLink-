const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res, next) => {
    try {
        const {name, email, password, bloodType} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) 
            return res.status(409).json({message: "Email is already in use"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            bloodType
        });

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.status(201).josn({
            message: "Account created successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                bloodType: user.bloodType,
                role: user.role
            }
        });
    } catch(error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.fondOne({email});
        if (!user)
            return res.status(401).json({message: "Invalid email or password"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({message: "Invalid email or password"});

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.status(200).json({
            message: "Logged in successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                bloodType: user.bloodType,
                role: user.role
            }
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {register, login};