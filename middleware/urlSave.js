 const Apisave = require('../model/platformApicall')
module.exports.apisave = function (req,res,next){
    console.log(req.url);
    next();
}