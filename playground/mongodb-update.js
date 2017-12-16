//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructuring the mongodb object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a35654d032243e0cb4274b2')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a346fa620468b0c73d47bfe')
    }, {
        $set: {
            name: "Janelle"
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});