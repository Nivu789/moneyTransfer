const mongoose = require('mongoose')


const accountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const ACCOUNT = mongoose.model('accounts',accountSchema)

module.exports = {
    ACCOUNT
}