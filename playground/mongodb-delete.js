const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


db.collection('Users').findOneAndDelete({_id: new ObjectID('5904dbc555588251da09bfcd')}).then((result)=>
console.log(result));

//db.close();


});
