const Seller = require('../model/seller');
module.exports.create = async function(req,res){
   // console.log(req.user._id);
   const seller = await Seller.findOne({sellername : req.body.seller});
   if(seller){
    return res.status(200).json({'message' : 'seller already created'});
   }else{
     let data = await Seller.create({
        sellername : req.body.seller,
        mobile : req.body.mobile,
        user : req.user._id
     });
     return res.status(200).json({seller : data.sellername, mobile : data.mobile});
       
       
   }

}