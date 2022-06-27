const mongoose=require('mongoose');

// schema to store all users 
const apiSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
},{
    timestamps:true
});


const Api = mongoose.model('Api', apiSchema);
module.exports = Api;