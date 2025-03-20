const express = require('express')
const router = express.Router();
const User = require('../Models/User')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2;
require('dotenv').config()

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.SECRET_KEY // Click 'View API Keys' above to copy your API secret
    });


// api admin signup

router.post('/admin/sinup', async (req, res) => {
    try {
        // console.log('hellow')
        const users = await User.find({ email: req.body.email })
        if (users.length > 0) {
            return res.status(500).json({
                error: 'email already registered'
            })
        }
        const uploadedImage = await cloudinary.uploader.upload(req.files.logo.tempFilePath)
        // console.log(uploadedImage)
        const hashCode = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            _id: new mongoose.Types.ObjectId,
            fullName: req.body.fullName,
            about:req.body.about,
            experience:req.body.experience,
            aualification:req.body.qualification,
            email: req.body.email,
            phone: req.body.phone,
            logoUrl:uploadedImage.secure_url,
            logoId:uploadedImage.public_id,
            password: hashCode
        })
        const data = await user.save()
        res.status(200).json({
            newuser: data
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
})
//  api admin login
router.post('/admin/login', async (req, res) => {
    try {
        const users = await User.find({ email: req.body.email })
        if (users.length == 0) {
            return res.status(500).json({
                error: 'email ist resgistered'
            })
        }
        const isvalid = await bcrypt.compare(req.body.password, users[0].password)
        if (!isvalid) {
              return res.status(500).jons({
                error:'invalid password'
              })
        } 
        const token = await jwt.sign({
            _id: users[0]._id,
            email: users[0].email,
            phone:users[0].phone,
            fullName:users[0].fullName,
            password: users[0].password,
            logoId:users[0].logoId
        },
            'sbs online classes 123', // Use env variable in production
            { expiresIn: '365d' });
        res.status(200).json({
            _id: users[0]._id,
            fullName:users[0].fullName,
            email: users[0].email,
            phone:users[0].phone,
            fullName:users[0].fullName,
            logoUrl:users[0].logoUrl,
            logoId:users[0].logoId,
            password:token
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
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