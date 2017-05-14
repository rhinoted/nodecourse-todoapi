<<<<<<< HEAD
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
=======
var mongoose=require('mongoose');

var Todo = mongoose.model('Todo', {
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default: false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports={Todo};
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
