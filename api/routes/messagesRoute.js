const express =require("express");
const{fn}=require('../controllers/messagesController')


const router= express.Router();

router.get('/test',fn)
module.exports = router;