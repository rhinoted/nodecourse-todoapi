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
