const mongoose=require('mongoose');
const user = require('./user');
var Schema = mongoose.Schema;

// schema to store all users 
const orderSchema=new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"

    },
    // seller:{
    //     type: Schema.Types.ObjectId,
    //     ref: "Seller"
    // },
    products: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Quantity'
        }
    ],
    amount :{
        type:Number,
        required:true
    }
},{
    timestamps:true
});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;