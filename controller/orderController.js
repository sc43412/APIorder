 const Order = require('../model/order')
 //const userid = "62af8149191ed90f4abf97ed";
 const User = require('../model/user');
 const productid = '62b09d866efb753f361d26eb';
 const Cart = require('../model/cart');
 const Product = require('../model/product')

 /// creating a order
 module.exports.add = async function(req,res){
   try{
   const userid = req.user._id;
    // FIND THE NAME OF USER
    const user = await  User.findById(userid);
    const name = user.email;
    //console.log(req.query);
    // fetching product name and amount from product
    const product = await Product.findById(req.query.pid);
    // creating amount detailes 
     let quantity = parseInt(req.query.quantity);
     let amount = product.amount * quantity;
     //console.log(amount);
   // CREATING PRODUCT AND QUANTITY
    const obj = {
        productname : product.name,
        quantity : quantity
    }
    // checking user cart is available or not
    let cart = await Cart.findOne({amt : name});
    //console.log(cart.productdetails.length);
    // if available user cart then push product
    if(cart){
    for(let value of cart.productdetails){
         if(value.productname===product.name){
            // IF PRODUCT ALREADY EXISTS THEN DISPLAY A MESSAGE
            return res.status(200).json({'message' : 'item already in cart'})
             }
    }
    // SAVE THE PRODUCTS
     await cart.productdetails.push(obj);
     cart.save();
       // SAVING THE TOTAL AMOUNT IN ORDER
       const od = await Order.findOne({_id : userid});
       amount = amount + od.amount;
       od.amount = amount;
       od.save();
      
    } else{
       // IF CART NOT EXISTS CREATE THE CART
        let qt = await  Cart.create({
            amt : name,
         })
         qt.productdetails.push(obj);
         qt.save();
        // CREATING THE ORDER 
         const od = await  Order.create({
            _id : userid,
            amount : amount,
            products : qt._id
         })
         

        }
        return res.status(200).json ({"message" : "order is successfully done"});
      }catch(err){
         return res.status(404).json({'message' : 'bad gateway'})
      }
    }
       
    // view orders
   module.exports.view = async function (req,res){
      try{
      const userid = req.user._id;
    const order = await  Order.findById(userid).populate('products','productdetails');
    if(!order){
      return res.status(404).json({"message" : "order not placed"});
    }
    //console.log(order.products.productdetails);
    const order_id = order.id;
    const total_price = order.amount;
    const items_ordered = order.products.productdetails;


    return res.status(200).json({order_id,items_ordered,total_price});
      }
      catch(err){
         console.log(err);
         return res.status(404).json({"messaqge" : "bad gateway path"});
      }
    

   }
  // update orders
   module.exports.update = async function (req,res){
      const userid = req.user._id;
    const user = await  User.findById(userid);
    const name = user.email;
    const cart = await Cart.findOne({amt  : name });
    console.log(cart);
    const pdname = req.query.product;
    const quantity = parseInt( req.query.quantity);
   // const obj = {
   //      productname : req.query.product,
   //      quantity :    req.query.quantity
   //  }
     let arr = cart.productdetails;
     arr.forEach(element => {
      if(element.name == pdname){
         element.quantity = quantity;
      }
     });
    
    cart.save();

   }
    //delete order
    module.exports.delete = async  function(req,res){
      const userid = req.user._id;
       const orderid = req.query.delete;
       try{
       const user = User.findById(userid);
       const name = user.email;
       // DELETE ORDER AND CART ITEM BOTH
     await Order.findByIdAndRemove(orderid);
     await  Cart.findOneAndRemove({amt : name});
     return res.status(200).json({"messege" : "items are succesfully deleted from cart"});
       }
       catch(err){
        return res.status(404).json({"messege" : "bad gateway"});
       }


    }
