const Product = require('../model/product')
module.exports.create = async function(req,res){
   const product = await Product.findOne({name : req.body.name});
   if(product){
    return res.status(200).json({'message' : 'product already created'});
   }else{
     let data = await Product.create(req.body);
     return res.status(200).json({productname : data.name, amount : data.amount});
   
   }

}

module.exports.list = async function (req,res){
  var perPage = 5;
   page = parseInt(req.query.page);
   var page = Math.max(0, page);
  const products = await  Product.find({}).limit(perPage)
  .skip(perPage * page)
  .sort({
      name: 'asc'
  })
;
   return res.status(200).json({products});
   console.log(products);

  
}