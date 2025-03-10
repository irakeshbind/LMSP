const express = require('express');
const app = express();
const authRoute = require('./routes/auth')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const connectWithDatabase = async() => {
    try {
        await mongoose.connect('mongodb+srv://rakesh:123@cluster0.lydcv.mongodb.net/')
        console.log('Connected with databse')
    }
    catch (err) {
        console.log('databse is not connect')
    }
}
connectWithDatabase();

  


app.use('/auth', authRoute)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app;
