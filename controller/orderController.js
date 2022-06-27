 const Order = require('../model/order')
 const userid = "62af8149191ed90f4abf97ed";
 const User = require('../model/user');
 const productid = '62b09d866efb753f361d26eb';
 const Cart = require('../model/cart');
 const Product = require('../model/product')
 module.exports.add = async function(req,res){
    const user = await  User.findById(userid);
    const name = user.email;
    //console.log(req.query);
    // fetching product name and amount from product
    const product = await Product.findById(req.query.pid);
    // creating amount detailes 
     let quantity = parseInt(req.query.quantity);
     let amount = product.amount * quantity;
     //console.log(amount);
    /// store product and quantity 

    const obj = {
        productname : product.name,
        quantity : quantity
    }
    let cart = await Cart.findOne({amt : name});
    console.log(cart.productdetails.length);
    //console.log(cart[0].productdetails.length);
//    if(carts.length>0){
//     for(let cart of carts ){
//            for(let value of cart.productdetails){
//                if(value.productname===product.name){
//                   return res.status(200).json({'message' : 'item already in cart'})
//                }
//            }
//     }
    
// }   else{
//         let qt = await  Cart.create({
//             amt : name,
//          })
//          qt.productdetails.push(obj);
//          qt.save();

//         }
//          const od = await  Order.create({
//             _id : userid,
//             amount : amount
            
//          })
//          od.products.push(qt);
//          od.save();
//          console.log(od);
    }


    
     
//     //   Order.create({
//     //     _id : req.user._id,
//     //     seller : req.seller._id,
//     //     ,
//     //     user : req.user._id
//     //   })
//  
    