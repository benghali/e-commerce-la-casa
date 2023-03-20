const express =require("express");
const{fn}=require('../controllers/conversationController')


const router= express.Router();

router.get('/test',fn)
module.exports = router;