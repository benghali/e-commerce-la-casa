const User = require('../models/userModels.js');
const jwt =require('jsonwebtoken');
const {createError} = require("../utils/createError.js")



const deleteUser = async (req,res,next)=>{
const user = await User.findById(req.params.id)
// console.log(req.params.id,"userId")
// console.log(jwtKey,"jwtKey")

    const idUser= user._id;
    if(req.userId !== idUser.toString()){
    
       return next(createError(401,"you can delete only your account"))
    };
    await User.findByIdAndDelete(req.params.id)
    res.send("deleted !!")


}




module.exports={deleteUser}