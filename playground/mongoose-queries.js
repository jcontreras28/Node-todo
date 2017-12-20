const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a35834127c1690f070a66aa11';

if (!ObjectID.isValid(id)) {
    return console.log('Id is not valid');
}

// returns array
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

// returns document
Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

// returns document
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
}).catch((e) => console.log(e));