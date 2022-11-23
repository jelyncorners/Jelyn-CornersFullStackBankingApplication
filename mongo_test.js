const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Now connected to the database of Jelyn!')

    //database name
    const dbName = 'myproject';
    const db = client.db(dbName);

    //new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';
    var password = " ";
    var balance = '$' + Math.floor(Math.random()*100);

    //insert into user table
    var collection = db.collection('users');
    var doc = {name, email, password, balance, userid};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document insert');
    });

    var customers = db
        .collection('users')
        .find()
        .toArray(function(err,docs) {
            console.log('Collection:', docs)

            //clean up
            client.close();
        });
});