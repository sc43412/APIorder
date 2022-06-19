const mongoose=require('mongoose');

// schema to store all users 
const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
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


const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;