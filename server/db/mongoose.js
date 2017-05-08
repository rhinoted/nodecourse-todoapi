var mongoose = require('mongoose');

mongoose.Promise=global.Promise;

// mongoose.connect(process.env.PORT ? 'mongodb://rhinoted:cesare26@ds129651.mlab.com:29651/mydatabase' : 'mongodb://localhost:27017/TodoApp');

mongoose.connect(process.env.MONGODB_URI);



module.exports={
  mongoose
};
