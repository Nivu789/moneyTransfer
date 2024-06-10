const  mongoose  = require("mongoose")
const { ACCOUNT } = require("../models/accountModel")


const checkBalance = async(req,res) =>{
    try {
        const accountInfo = await ACCOUNT.findOne({userId:req.userId})
        if(accountInfo){
            return res.json({balance:accountInfo.balance})
        }else{
            return res.json({message:"Something went wrong"})
        }
    } catch (error) {
        console.log(error)
    }
}

const transfer = async(req,res) =>{
    try { 
        const fromUser = req.userId
        const toUser =  req.params.id
        const {amount} = req.body
        const session = await mongoose.startSession()

        session.startTransaction()
    
        const accountInfo = await ACCOUNT.findOne({userId:fromUser})
        if(amount>accountInfo.balance){
            await session.abortTransaction()
            return res.json({message:"Insufficient balance"})
        }

        const toAccount = await ACCOUNT.findOne({userId:toUser})
        if(!toAccount){
            session.abortTransaction()
            return res.json({message:"Couldn't find any such account"})
        }

        await ACCOUNT.findOneAndUpdate({userId:toUser},{$inc:{balance:+amount}})
        await ACCOUNT.findOneAndUpdate({userId:fromUser},{$inc:{balance:-amount}})

        session.commitTransaction()
        return res.json({message:"Transaction successfull"})

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkBalance,
    transfer
}