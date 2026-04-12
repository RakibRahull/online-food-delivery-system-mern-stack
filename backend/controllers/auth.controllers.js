import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../utills/token.js"

export const signUp=async(req,res)=>{
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
        const token=await genToken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSize: "strict",
            maxAge:7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(201).json(user)

        

    } catch (error) {
       return res.status(500).json(' sign up error ${error}')
    }
} 

export const signIn=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"user does not exist"}) 
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"incorrect password"})
        }

        const token=await genToken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSize: "strict",
            maxAge:7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(201).json(user)

        

    } catch (error) {
       return res.status(500).json(' sign In error ${error}')
    }
} 

export const signOut=async(params)=>{
    try {
        res.clearCookie("token")

        return res.status(200).json({message:"sign out successful"})
    } catch (error) {
        return res.status(500).json(' sign out error ${error}')
    }
}