const passport = require('passport');
const express= require('express');
const router = express.Router();
const sellerController = require('../controller/sellerController');
router.post('/add-seller',passport.authenticate('jwt',{session:false}),sellerController.create)
module.exports=router;