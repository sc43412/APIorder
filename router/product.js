const passport = require('passport');
const express= require('express');
const router = express.Router();
const productController = require('../controller/productController');
router.post('/add-product',passport.authenticate('jwt',{session:false}),productController.create);
router.get('/product-list/?',passport.authenticate('jwt',{session:false}),productController.list);

module.exports=router;