import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

const signUp=async(req,res)=>{
    try {
        const {fullName,email,password,mobile,role}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exist"}) 
        }
        if(password.length<8){
            return res.status(400).json({message:"password must be at least 8 characters"})
        }
         if(mobile.length<11){
            return res.status(400).json({message:"Mobile number must be at least 11 digits"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        user=await User.create({
            fullName,
            email,
            password:hashedPassword,
            mobile,
            role
        })
        res.status(201).json({message:"User created successfully", user})
        

    } catch (error) {
    
    }
}    