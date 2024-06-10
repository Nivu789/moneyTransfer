const mongoose = require('mongoose')

const connectToDb = async() =>{
    try {
        await mongoose.connect('mongodb+srv://nivuyt789:nivedneha@cluster0.svuzfcw.mongodb.net/')
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectToDb}