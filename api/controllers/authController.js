const User = require("../models/userModels.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const{createError}= require('../utils/createError.js')
const register = async (req, res, next) => {


  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });


    await newUser.save();
    res.status(201).send("user has been created");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res,next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
  

    if (!user) return next(createError(404,"user not found"))

    const isCorret = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorret)
      return next(createError(400,"wrong username or password !"));


      const jwtKey = process.env.JWT_KEY;
    

const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      jwtKey
    );


    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(createError(500,"something went wrong !!"));
    
  }
};
const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken",{
      sameSite:"none",
      secure:true,
      
    })
    .status(200).send("User has been logged out.")
  } catch (err) {
    next(createError(500,"something went wrong !!"));
  }
};
module.exports = { register, login, logout };
