const User = require('../models/userModels.js');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');


const register =  async (req,res)=>{
// console.log("=====> body1 :",req.body);
    try{
        const hash=bcrypt.hashSync(req.body.password,5)
const newUser =new User({
    ...req.body,
    password:hash,
})
// console.log("=====> body1 :",req.body);
await newUser.save()
res.status(201).send("user has been created")
    }catch(err){
        res.status(500).send(err)
    }
}

const login =  async (req,res)=>{

    try{
const user= await User.findOne({username:req.body.username});
if(!user) return res.status(404).send('user not found')

const isCorret= bcrypt.compareSync(req.body.password,user.password)
if(!isCorret) return res.status(400).send(' wrong username or password ! ')

const token=jwt.sign({
    id:user_id,
    isSeller:user.isSeller,
},process.env.JWT_KEY)

const{password,...info}=user._doc;
res.cookie("accessToken",token,{
    httpOnly:true,
}).status(200).send(info)

    }catch(err){
        res.status(500).send('something went wrong !!')
    }
}
const logout = async (req,res)=>{

    try{

    }catch(err){
        res.status(500).send('something went wrong !!')
    }
}
module.exports={register,login,logout}