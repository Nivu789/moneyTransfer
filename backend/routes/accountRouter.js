const express = require('express')
const accountRouter = express.Router()
const accountFunctions = require('../controllers/accountController')
const {authMiddleWare} = require('../middlewares/authMiddleWare')

accountRouter.get('/balance',authMiddleWare,accountFunctions.checkBalance)

accountRouter.post('/transfer/:id',authMiddleWare,accountFunctions.transfer)


module.exports = accountRouter