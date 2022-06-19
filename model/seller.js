const mongoose=require('mongoose');
const User = require('./user');
var Schema = mongoose.Schema;

// schema to store all users 
const sellerSchema=new mongoose.Schema({
    sellername:{
        type:String,
        required:true
    },
    mobile :{
    type:String,
    required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps:true
});


const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;