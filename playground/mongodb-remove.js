const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/user');

// Todo.remove - removes all matching docs with no return of the docs
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// removes one and returns the doc
// Todo.findOneAndRemove({complete: true}).then((todo) => {
//      console.log(todo);
// });

Todo.findByIdAndRemove('somevalidIdhere').then((todo) => {
    console.log(todo);
});