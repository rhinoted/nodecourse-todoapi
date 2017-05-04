const expect =require('expect');
const request=require('supertest');
const {ObjectID}=require('mongodb');


const {app} = require ('./../server.js');
const {Todo} = require ('./../models/todo.js');

const todos= [{
  text:'first case',
  _id: new ObjectID()
},{
  text:'second case',
  _id: new ObjectID(),
  completed:true,
  completedAt:3242323
}];


beforeEach((done)=>{
  Todo.remove({}).then(()=>{
  return  Todo.insertMany(todos);
}).then(()=>done());
});


describe('Post Todos', ()=>{
  it('should create a new todo',(done)=>{
    var text = 'test todo text';
    request(app)
    .post('/todos')
    .send({text:text})
    .expect(200).
    expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if (err) {
        return done(err);
      }
      Todo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>done(e));
    });
  });



it('should not create invalid todo', (done)=>{

request(app)
.post('/todos')
.send({})
.expect(400)
.end((err,res)=>{
  if (err){
    return done(err);
  }
  Todo.find().then((todos)=>{
    expect(todos.length).toBe(2);
    done();
  }).catch((e)=>done(e));

});

});


});


describe('GET /todos', ()=> {

it('should get all todos', (done)=>{
  request(app)
  .get('/todos')
  .expect(200)
  .expect((res)=>{
    expect(res.body.todos.length).toBe(2);
  })
  .end(done);
});

});



describe('Get /todos/:id',()=>{

it('Should return todo doc',(done)=>{
  request(app)
  .get(`/todos/${todos[0]._id.toHexString()}`)
  .expect(200)
  .expect((res)=>{

    expect(res.body.todo.text).toBe(todos[0].text)
  })
  .end(done);
});


it('Should return 404 for object not found',(done)=>{
  request(app)
  .get(`/todos/${(new ObjectID).toHexString()}`)
  .expect(404)
  .end(done);
});


it('Should return 404 for invalid id',(done)=>{
  request(app)
  .get('/todos/123')
  .expect(404)
  .end(done);
});





});




describe('DELETE /todos/:id',()=>{

it('Should delete a todo',(done)=>{
  let hexId= todos[0]._id.toHexString();
request(app)
.delete(`/todos/${hexId}`)
.expect(200)
.expect((res)=>{
  expect(res.body.todo._id).toBe(hexId);
})
.end((err,res)=>{
  if (err){
    return done(err);
  }

  Todo.findById(hexId).then((todo)=>{
    expect(todo).toNotExist();
    done();
  }).catch((e)=>{
    done(e);
  });
});


});

it('Should return 404 if todo not found',(done)=>{
  request(app)
  .delete(`/todos/${(new ObjectID).toHexString()}`)
  .expect(404)
  .end(done);
});

it('Should return 404 if objectid is not valid',(done)=>{
  request(app)
  .delete('/todos/1234')
  .expect(404)
  .end(done);
});





});




describe('Patch todo with id',()=>{

it('Should update the todo',(done)=>{
var id=todos[0]._id.toHexString();
request(app)
.patch(`/todos/${id}`)
.send({text:'test',completed:true})
.expect(200)
.expect((res)=>{
  expect(res.body.todo.text).toBe('test');
  expect(res.body.todo.completedAt).toBeA('number');
}).end(done);

});



it('Should clear completedAt whe todo is not completed',(done)=>{
var id=todos[1]._id.toHexString();

request(app)
.patch(`/todos/${id}`)
.send({text:"test",completed:false})
.expect(200)
.expect((res)=>{
  expect(res.body.todo.text).toBe('test');
  expect(res.body.todo.completedAt).toNotExist();
})
.end(done);

});


});
