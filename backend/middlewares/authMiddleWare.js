const jwt = require('jsonwebtoken')
const secret = 'my-secret'

const authMiddleWare = (req,res,next)=>{
    try {
        const authHeader = req.headers.authorization

        if(!authHeader || !authHeader.startsWith('Bearer')){
            return res.json({})
        }

        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token,secret)
        if(decoded.userId){
            req.userId = decoded.userId
            next()
        }else{
            return res.json({})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    authMiddleWare
}