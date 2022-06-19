const mongoose=require('mongoose');

// schema to store all users 
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    amount:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;