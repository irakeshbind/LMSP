const express = require('express');
const app = express();
const authRoute = require('./Routes/auth')
const courseRoute = require('./Routes/course')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const connectWithDatabase = async () => {
    try {
        // console.log(process.env.TOKEN_KEY)
        await mongoose.connect('mongodb+srv://rakesh:123@cluster0.lydcv.mongodb.net/')
        console.log('connected with databases')
    }
    catch (err) {
        console.log('databse is not connect')
    }
}
connectWithDatabase();
app.use(cors())
app.use(fileUpload({
    useTempFiles: true,

}));
app.use(bodyParser.json())

app.use('/auth', authRoute)
app.use('/course', courseRoute)


module.exports = app;