const {createUser}=require('../controller/TestController')
const express=require('express')
const router = express.Router()

router.post('/createuser',createUser)

module.exports=router