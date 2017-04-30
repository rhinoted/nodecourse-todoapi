const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


db.collection('Users').find({name:'Cesare'}).count().then((count)=>{
console.log('Count:',count);


}, (err)=>{
  console.log('unable to fetch',err);
});




//db.close();

});
