const User = require('../model/user')
const jwt = require('jsonwebtoken');
module.exports.create = async function(req, res){
   // console.log(req.body);
   if(req.body.password && req.body.email && req.body.name){
    try{
      let user = await  User.findOne({email:req.body.email});
      if(user){
       return res.status(200).json({'message' : 'you have logged in already please sign in to continue'})
      } else{
          await User.create(req.body);
          return res.status(200).json({'message' : 'account is created sucessfully'});
      }
    }
    catch(err){
        return res.status(404).json({'message' : 'stroing in db error'});
    }

      

   } else{
    res.status(404).json({'message' : 'required filed cannot be empty'});
   }

}


////////////////////////////////////////////
module.exports.createSession = async function(req, res){

    try{
        let user = await User.findOne({email: req.body.email});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe! expires in ',
            data:  {
                token: jwt.sign(user.toJSON(), 'kgfchapter2', {expiresIn:  '1000000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

module.exports.home = function(req,res){
    return res.status(200).json({'message' : 'i am baby'});
}