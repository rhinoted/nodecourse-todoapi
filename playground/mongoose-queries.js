<<<<<<< HEAD
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '57bf38394b39c93d2a557e9811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('57bdb0fcdedf88540bfa2d66').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
=======
const mongoose=require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');
var id= "5908ac439acbc810e606d252";

var userId="6390734614a045c5ce2c71a45";
//
// Todo.find({
//
// _id:id
//
// }).then((todos)=>{
//   if(todos.length===0) {
//     return console.log('no todo found')
//   }
//   console.log(todos);
// });
//
//
// Todo.findOne({
//
// _id:id
//
// }).then((todo)=>{
//   if(!todo) {
//     return console.log('no todo found')
//   }
//   console.log(todo);
// }).catch((e)=>{
//
//   console.log(e);
// });
//
//
// //
// Todo.findById(id).then((todo)=>{
//   if(!todo) {
//     return console.log('no todo found')
//   }
//   console.log(todo);
// });


User.findById(userId).then((user)=>{
if(user)  {return console.log(user);}

console.log('not found');
}

).catch((e)=>{
  console.log(e.message);
})
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
