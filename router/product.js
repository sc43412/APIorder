const passport = require('passport');
const express= require('express');
const router = express.Router();
const productController = require('../controller/productController');
router.post('/add-product',passport.authenticate('jwt',{session:false}),productController.create);
module.exports=router;