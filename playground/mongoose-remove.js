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

});
