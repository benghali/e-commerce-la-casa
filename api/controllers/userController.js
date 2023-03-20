const User = require('../models/userModels.js');
const jwt =require('jsonwebtoken');




const deleteUser = async (req,res)=>{
    const token=req.cookies.accessToken;
if(!token) return (res.status(401).send("you are not authenticated"))

jwt.verify(token,process.env.JWT_KEY,(err,payload)=>{
    res.send(payload)
})

// await User.findByIdAndDelete(req.params.id)
}




module.exports={deleteUser}