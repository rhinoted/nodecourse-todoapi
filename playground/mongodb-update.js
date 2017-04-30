const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5904dbd355588251da09bfd2')
},{
  $set:{
    name:'Cesare'
  },
    $inc:{
      age:1
    }

}, {
  returnOriginal:false
}).then((result)=>console.log(result));
//db.close();


});
