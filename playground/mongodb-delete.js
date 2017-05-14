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
  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("57ac8d47878a299e5dc21bc8")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
=======

db.collection('Users').findOneAndDelete({_id: new ObjectID('5904dbc555588251da09bfcd')}).then((result)=>
console.log(result));

//db.close();


>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
});
