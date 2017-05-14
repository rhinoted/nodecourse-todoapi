<<<<<<< HEAD
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((todo) => {
  console.log(todo);
=======
const {ObjectID}=require('mongodb');

const mongoose=require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');


//
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });


// Todo.findOneAndREmove({})


Todo.findByIdAndRemove('590a0177356b65058f3981c1').then((todo)=>{
console.log(todo);

>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
});
