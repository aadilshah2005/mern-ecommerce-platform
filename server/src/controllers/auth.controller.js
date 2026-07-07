import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const {name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success:false,
                message: "All fields are required"
            });
        };

        const user = await User.findOne({email})
        if(user){
            return res.status(409).json({
                success:false,
                message: "User already exists"
            });
        };
        
        const normalizedEmail = email.toLowerCase().trim();
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email:normalizedEmail,
            password:hashPassword
        })

        const userResponse  = newUser.toObject();
        delete userResponse.password

        res.status(201).json({
            success:true,
            message: "User registered successfully",
            user : userResponse  
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: "User registration failed"
        })
    }
}



export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message: "All fields are required"
            });
        };

        const normalizedEmail = email.toLowerCase().trim();

        const user = await User.findOne({
            email: normalizedEmail
        });

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success:false,
                message: "Invalid email or password"
            })
        };

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({
            success:true,
            message: "Login successful",
            token,
            user: userResponse
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: "Login failed"
        })
    }
}


export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                success:false,
                message: "User not found"
            })
        }

        const userResponse = user.toObject();
        delete userResponse.password

        res.status(200).json({
            success:true,
            message:"user profile getting successfully",
            user: userResponse
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Profile getting error"
        })
    }
}


export const userLogOut = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Logout failed"
        });
    }
};