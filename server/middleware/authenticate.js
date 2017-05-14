<<<<<<< HEAD
var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
=======
var {User}=require('./../models/user.js');



var authenticate=(req,res,next)=>{
  var token=req.header('x-auth');
  User.findByToken(token).then((user)=>{
    if (!user){
  return Promise.reject();
    }

    req.user=user;
    req.token=token;
    next();
  }).catch((e)=>{
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
    res.status(401).send();
  });
};

<<<<<<< HEAD
module.exports = {authenticate};
=======
module.exports= {authenticate};
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
