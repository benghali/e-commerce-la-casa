const express =require("express");
const {deleteUser}=require('../controllers/userController')
const {verifyToken} = require('../middleware/jwt')

const router= express.Router();

router.delete('/:id',verifyToken,deleteUser)
// router.get('/login',fn)
module.exports = router;