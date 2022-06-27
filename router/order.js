const passport = require('passport');
const express= require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
router.post('/add-order/?',orderController.add);
router.get('/get-order-details',orderController.view);
module.exports=router;

///:id/update_quantity/?