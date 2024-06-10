const express = require("express");
const {connectToDb} = require('../backend/helperFunctions/dbConnect.js')
const userRouter = require('../backend/routes/userRouter.js')
const accountRouter = require('../backend/routes/accountRouter.js')
const cors = require('cors')
const app = express()

app.use(cors({
    origin:'http://localhost:5173/'
}))

connectToDb();
app.use(express.json())

app.use('/api/v1/user',userRouter)
app.use('/api/v1/accounts',accountRouter)

// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})

