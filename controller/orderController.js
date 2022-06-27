 const Order = require('../model/order')
 const userid = "62af8149191ed90f4abf97ed";
 const productid = '62b09d866efb753f361d26eb';
 const Quantity = require('../model/quantity');
 const Product = require('../model/product')
 module.exports.add = async function(req,res){
    console.log(req.query);
    const product = await Product.findById(req.query.pid);
     let quantity = parseInt(req.query.quantity);
     let amount = product.amount * quantity;
     console.log(amount);
    let qt = await  Quantity.create({
        product : req.query.pid,
        quantity : quantity
     })
     console.log(qt._id);
     
    const od = await  Order.create({
        _id : userid,
        amount : amount
        
     })
     od.products.push(qt);
     od.save();
     console.log(od);
     
//     //   Order.create({
//     //     _id : req.user._id,
//     //     seller : req.seller._id,
//     //     ,
//     //     user : req.user._id
//     //   })
//  
    }