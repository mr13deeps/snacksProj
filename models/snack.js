const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
    item : {type: String, required : true},
    desc : {type:String, default:"NA"},
    calories: {type:Number}
})

const model = mongoose.model('snackModel',snackSchema)

module.exports = model;