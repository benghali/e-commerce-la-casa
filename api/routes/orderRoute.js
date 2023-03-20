const express =require("express");
const{fn}=require('../controllers/orderController')


const router= express.Router();

router.get('/test',fn)
module.exports = router;