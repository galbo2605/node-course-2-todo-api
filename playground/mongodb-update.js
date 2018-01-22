// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID("5a65dec6a5883069f8e27f7b")
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID("5a653194aff18c3aa0474f36")
        }, {
            $set: {
                name: 'Gal'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((results) => {
        console.log(results);
    });

    // db.close();
});
