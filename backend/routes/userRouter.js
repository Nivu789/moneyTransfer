const express = require('express')
const userFunctions = require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/',(req,res)=>{
    res.send("home router called")
})

userRouter.post('/signup',userFunctions.signup)

userRouter.post('/login',userFunctions.login)

userRouter.put('/update-info',userFunctions.updateInfo)

userRouter.get('/find',userFunctions.findUser)

module.exports = userRouter