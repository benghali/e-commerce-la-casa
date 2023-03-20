const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    gigId:{
        type:String,
       required:true,
},
img:{
    type:String,
   required:true,
},
title:{
    type:String,
   required:true,
},
price:{
    type:String,
   required:true,
},
buyerId:{
    type:String,
   required:true,
},
isCompleted:{
    type:Boolean,
   default:true,
},
payment_intent:{
    type:String,
   required:true,
},



},{
    timestamps:true
})

module.exports = mongoose.model("order",orderSchema)