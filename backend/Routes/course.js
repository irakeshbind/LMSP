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