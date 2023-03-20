const express =require("express");
const {deleteUser}=require('../controllers/userController')


const router= express.Router();

router.delete('/:id',deleteUser)
// router.get('/login',fn)
module.exports = router;