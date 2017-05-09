const bcrypt = require('bcryptjs');
var password ='123abc!';
bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  });
});


var hashed='$2a$10$qW2fuqIcDY78ZWPcwpftV.BSY.2vudpsST9GTs98UB/VchcrBiv4S';

bcrypt.compare(password,hashed,(err,res)=>{
  console.log(res);
});

// const {SHA256}=require('crypto-js');
//
// var message ='porco dio e la madonna';
// var hash=SHA256(message).toString();
// console.log(`message ${message}, Hash ${hash}.`);
//
// const jwt= require ('jsonwebtoken');
//
//
// var data= {
//   id:10
// };
//
//
// var token=jwt.sign(data,'secret12312');
//
// console.log(token);
//
//
// var decoded=jwt.verify(token,'secret12312');
//
// console.log(decoded);
