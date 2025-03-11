const express = require('express')
const router = express.Router();
const User = require('../Models/User')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// api admin signup

// api admin login
router.post('/admin/sinup',async(req,res)=>{
  try{
    const users = await User.find({email:req.body.email})
    if(users.length>0)
    {
        return res.status(500).json({
            error:'email already registered'
        })
    }
    const hashCode = await bcrypt.hash(req.body.password,10)
    const user = new User({
        _id:new mongoose.Types.ObjectId,
        fullName:req.body.fullName,
        email:req.body.email,
        phone:req.body.phone,
        password:hashCode
    })
    const data = await user.save()
    res.status(200).json({
        newuser:data
    })
  }
  catch(err)
  {
    console.log(err)
    res.status(500).json({
        error:err
    })
  }
})

router.post('/admin/login', (req, res) => {
    console.log(req.files)
    res.status(200).json({
        msg: 'login admin'
    })
})

router.post('/user/signup', (req, res) => {
    console.log(req.files)
    res.status(200).json({
        msg: 'login signup'
    })
})

router.post('/user/login', (req, res) => {
    console.log(req.files)
    res.status(200).json({
        msg: 'login user'
    })
})


module.exports = router;