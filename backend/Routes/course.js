const express = require('express')
const router = express.Router();
const Course = require('../Models/Course')
const mongoose = require('mongoose');

const cloudinary = require('cloudinary').v2;
require('dotenv').config()

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.SECRET_KEY // Click 'View API Keys' above to copy your API secret
    });

router.post('/add-course',(req,res)=>{
    
})




    module.exports = router;




