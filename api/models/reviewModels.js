const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    star:{
        type:Number,
        required:true,
        enum:[,2,3,4,5]
    },

},{
    timestamps:true
})

module.exports = mongoose.model("Review",reviewSchema)