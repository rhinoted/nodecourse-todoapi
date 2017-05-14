<<<<<<< HEAD
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
=======
var env = process.env.NODE_ENV || "development";
console.log('env---------',env);

if (env === 'development') {
  process.env.PORT =3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env==='test') {
process.env.PORT= 3000;
process.env.MONGODB_URI='mongodb://localhost:27017/TodoAppTest'
>>>>>>> 97d8561df94d180ba146b5e9938c43a7cc588a16
}
