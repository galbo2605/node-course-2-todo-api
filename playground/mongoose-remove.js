const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5a66557424938299cd5a14c4'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5a66557424938299cd5a14c4').then((todo) => {
    console.log(todo);
});
