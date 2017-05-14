<<<<<<< HEAD
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
=======
const {MongoClient,ObjectID} = require('mongodb');
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

<<<<<<< HEAD
  // db.collection('Todos').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
=======

db.collection('Users').find({name:'Cesare'}).count().then((count)=>{
console.log('Count:',count);


}, (err)=>{
  console.log('unable to fetch',err);
});




//db.close();

>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
});
