const express = require('express');

const router = express.Router();
const passport = require('passport');
const usercontroller = require('../controller/userController');

router.post('/signup',usercontroller.create);
router.get('/login',usercontroller.createSession);
router.get('/home',passport.authenticate('jwt',{session:false}),usercontroller.home);


module.exports=router;