// const {SHA256}=require('crypto-js');
//
// var message ='porco dio e la madonna';
// var hash=SHA256(message).toString();
// console.log(`message ${message}, Hash ${hash}.`);

const jwt= require ('jsonwebtoken');


var data= {
  id:10
};


var token=jwt.sign(data,'secret12312');

console.log(token);


var decoded=jwt.verify(token,'secret12312');

console.log(decoded);
