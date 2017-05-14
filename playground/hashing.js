<<<<<<< HEAD
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$huAU4qTnQuGPifHEXfV9cOmPJ7p61oKaoXrY1WviiDAznE/rW8oLK';

bcrypt.compare('123!', hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
=======
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
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
