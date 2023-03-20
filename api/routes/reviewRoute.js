const express =require("express");
const{fn}=require('../controllers/reviewController.js')


const router= express.Router();

router.get('/test',fn)
module.exports = router;