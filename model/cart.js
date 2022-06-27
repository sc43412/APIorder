const mongoose=require('mongoose');
const User = require('../model/user');
const Schema = mongoose.Schema;

// schema to store all users 
const cartSchema=new mongoose.Schema({
      amt : {
        type: String,
        required:true,
        unique : true
     },
  productdetails : [{
    productname : {
       type : String,
       unique : true
    },
    quantity : {
        type : Number,

    }
    },]
},{
    timestamps:true
});


const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;