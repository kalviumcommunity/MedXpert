import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// ✅ User Registration (Signup)
router.post("/register", async (req, res) => {
    const { email, username,password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User ({ email, username, password: hashedPassword });

    try{
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    }catch(error){
        res.status(500).json({ error: "Error registering User :( " });
    }
});

// ✅ User Login
router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({ username });

    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secret_key", { expiresIn: "1h" });
    res.json({ token, message: "Login Successful" });
});

// ✅ Get All Users (Public)
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

export default router;
