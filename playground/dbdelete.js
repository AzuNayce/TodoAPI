// const mongoClient =  require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

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

   db.collection('Todos').deleteOne({_id: new ObjectId('5bbb0d11a84a6b0e2c30b7ff')}).then((result)=>{
       console.log(JSON.stringify(result, undefined, 2))
   }).catch((err)=>{
       console.log(err);
   })

    client.close();
});