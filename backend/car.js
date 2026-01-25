//THIS FILE WILL CONTAIN ALL THE MODELS
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    },
    sasiu: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['leasing', 'nonleasing']
    },
    leasingFile: {
        type: Number,
    },
    leasingStart: {
        type: String,
    },
    leasingFinish: {
        type: String,
    },
    rcaExpire: {
        type: String,
        required: true
    },
    cascoExpire: {
        type: String,
        required: true
    },
    rovinietaExpire: {
        type: String,
        required: true
    },
    itpExpire: {
        type: String,
        required: true
    }
})

//compiling our model
const CarModel = mongoose.model('Car', carSchema);

//export the model from this file
module.exports = CarModel;