const express = require('express')
const router = express.Router();
const Course = require('../Models/Course')
const mongoose = require('mongoose');
const checkAuth = require('../middleware/checkAuth');
const jwt = require('jsonwebtoken');

const cloudinary = require('cloudinary').v2;
require('dotenv').config()

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY // Click 'View API Keys' above to copy your API secret
});

router.post('/add-course', checkAuth, async (req, res) => {
    try {
        // console.log(req.body)
        // console.log(req.files)
        const token = req.headers.authorization.split(" ")[1]
        const user = await jwt.verify(token, 'sbs online classes 123')
        // console.log(user)
        const uploadedImage = await cloudinary.uploader.upload(req.files.thumbnail.tempFilePath)
        const course = new Course({
            _id: new mongoose.Types.ObjectId,
            courseName: req.body.courseName,
            courseDetail: req.body.courseDetail,
            price: req.body.price,
            discount: req.body.discount,
            uId:user._id,
            thumbnailUrl:uploadedImage.secure_url,
            thumbnailId: uploadedImage.public_id
        })
        const newcourse = await course.save()
        res.status(200).json({
            newcourses:newcourse
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
})




module.exports = router;




