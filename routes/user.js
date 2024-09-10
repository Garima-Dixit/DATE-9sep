const express=require('express');
const router=express.Router();
//const users=require('../user.json');
const UserController=require('../controllers/UserController')

router.get('/users',(req,res)=>{
    //res.json(users)
    UserController.getUser(req,res)
})
//localhost:3000/user/10
router.get('/user/:id',(req,res)=>{
    UserController.getParticularUser(req,res)
})

module.exports=router;