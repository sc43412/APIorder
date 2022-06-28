const passport = require('passport');
const express= require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
router.post('/add-order/?',passport.authenticate('jwt',{session:false}),orderController.add);
router.get('/get-order-details',passport.authenticate('jwt',{session:false}),orderController.view);
router.delete('/remove/?',passport.authenticate('jwt',{session:false}),orderController.delete);
module.exports=router;

///:id/update_quantity/?