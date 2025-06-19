import User from "../models/user-moler.js";
import bcrypt from "bcrypt"
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------
const register = async (req, res) => {
  try {
    const {username, email, phone, password} = req.body;
    
    const userExists = await User.findOne({email})
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

// bcrypt hashing

const solt = 10;
const hash_password = await bcrypt.hash(password, solt);




   const userCreate = await User.create({
      username,
      email,
      phone,
      password:hash_password
    });

    res.status(201).json({ message: "registration succesfull" ,token: await userCreate.generateToken(), userId: 
      userCreate._id.toString(), });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, userExists.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Success
    res.status(200).json({
      message: "Login successful",
      token: await userExists.generateToken(),
      userId: userExists._id.toString(),
    });

  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {home, register, login};