// const mongoClient =  require('mongodb').MongoClient;

const {MongoClient} = require('mongodb');

// var User = {
//     name:"Bob"
// };

// console.log(User.name);

// var {name} = User;

// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) =>{
    if (err) {
        return console.log(err);
    }
    console.log('connected');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'something to do',
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops));

    });
    db.collection('Users').insertOne({
        username:'bob',
        password:'toto'
    }, (err, result) =>{
        if (err){
            return console.log('unable to insert user')
        }

    console.log(JSON.stringify(result.ops));
    });

    client.close();
});