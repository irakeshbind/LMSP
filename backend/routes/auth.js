const express = require('express');
const router = express.Router();

// admin 
// signup api
router.post('/admin/signup',(req,res)=>{
    res.status(200).json({
        msg:'signup request  admin'

})

})

// admin 
// login api
router.post('/admin/login',(req,res)=>{
    res.status(200).json({
        msg:'login request admin'

})




})

////
// user
// signup api
router.post('/user/signup',(req,res)=>{
    res.status(200).json({
        msg:'signup request  user'

})

})

// user
// login api
router.post('/userlogin',(req,res)=>{
    res.status(200).json({
        msg:'login request user'

})
})

module.exports =router