const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// schema to store all users 
const quantitySchema=new mongoose.Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity : {
        type : Number,
        required : true
    }
},{
    timestamps:true
});


const Quantity = mongoose.model('Quantity', quantitySchema);
module.exports = Quantity;