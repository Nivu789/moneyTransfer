const USER = require('../models/userModel')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const { response } = require('express')
const { ACCOUNT } = require('../models/accountModel')


const signup = async(req,res) =>{
    try {
        const {firstName,lastName,email,password} = req.body
        const userExists = await USER.findOne({email:email})
        if(userExists){
            return res.json({message:"User with that email exists"})
        }
        
        const userSchema = zod.object({
            firstName:zod.string().min(3),
            lastName:zod.string().min(3),
            email:zod.string().email(),
            password:zod.string().min(6)
        })

        const validate = userSchema.safeParse({firstName:firstName,lastName:lastName,email:email,password:password})
        if(validate.success){
            const dbUser = await USER.create({
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password
            })

            // await USER.save()

        await ACCOUNT.create({
            userId:dbUser._id,
            balance:5000
        })

        // await ACCOUNT.save()

            const secret = 'my-secret'
            const token = jwt.sign({userId:dbUser._id},secret)

            return res.status(200).json({message:"Accout created",success:true,token})

        }else{
            return res.json({message:"One or more fields got incorrect"})
        }

    } catch (error) {
        console.log(error)
    }
}


const login = async(req,res) =>{
    try {
        const {email,password} = req.body

        const emailSchema = zod.string().email()
        const validateEmail = emailSchema.safeParse(email)
        if(validateEmail.success){
            const userData = await USER.findOne({email:email})
            if(userData && userData.password==password){
                return res.json({message:"Logged in successfully",success:true})
            }else{
                return res.json({message:"email or password mismatch"})
            }
        }else{
            return res.json({message:"Provide a valid email address"})
        }
    } catch (error) {
        console.log(error)
    }
}


const updateInfo = async(req,res)=>{
    try {
        const validate = zod.object({
            firstName:zod.string().optional(),
            lastName:zod.string().optional(),
            password:zod.string().optional()
        })

        const {success} = validate.safeParse(req.body)
        if(!success){
            return res.json({message:"something went wrong while updating"})
        }

        await USER.updateOne({_id:req.id},req.body)
        return res.json({message:"User updated"})

    } catch (error) {
        console.log(error)
    }
}

const findUser = async(req,res) =>{
    try {
        const filter = req.query.filter || ""
        const data = await USER.find({
            $or:[
                {firstName:{$regex:`${filter}/i`}},
                {lastName:{$regex:`${filter}/i`}}
            ]
        })

        if(data){
            return res.json({user:data.map(user=>({email:user.email,firstName:user.firstName,lastName:user.lastName,userId:user_id}))})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    signup,
    login,
    updateInfo,
    findUser
}