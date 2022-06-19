const mongoose=require('mongoose');

// schema to store all users 
const orderSchema=new mongoose.Schema({
    customer:{
        type: Schema.Types.ObjectId,
        ref: "Customer"

    },
    seller:{
        type: Schema.Types.ObjectId,
        ref: "Seller"
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    amount :{
        type:Number,
        required:true
    }
},{
    timestamps:true
});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;