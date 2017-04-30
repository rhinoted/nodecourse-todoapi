var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedAt:{
    type:Number
  }
});


var newTodo2 = new Todo({
  text:'Go Fuck Myself',
  completed:true,
  completedAt:3242
});


newTodo2.save().then((doc)=>{
  console.log('Saved: ',doc);
}, (e)=>{
  console.log('Unable to save',e);
});


// var newTodo = new Todo({
//   text:'Cook Dinner'
// });
//
//
// newTodo.save().then((doc)=>{
//   console.log('Saved: ',doc);
// }, (e)=>{
//   console.log('Unable to save',e);
// });
