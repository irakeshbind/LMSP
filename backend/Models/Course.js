const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    uId:{ type: String, require: true },
    thumbnailUrl: { type: String, require: true },
    thumbnailId: { type: String, require: true },
    courseName: { type: String, require: true },
    price: { type: String, require: true },
    discount: { type: String, require: true },
    courseDetail: { type: String, require: true },

}, { timestamps: true })

module.exports = mongoose.model('coursed', courseSchema);