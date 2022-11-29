const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
let db = null;

// connect to mongo
MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, client) {
    console.log("Connected successfully to db server");
    console.log(uri);
    // connect to myproject database
    db = client.db('myproject');
});

// create user account using the collection.insertOne function
function create(name, email, password) {
    // TODO: populate this function based off the video
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err)  :  resolve(doc);
        });
    });
}

// find user account
function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}

// update withdraw amount
function withdrawUpdate(email, amount) {
    console.log('calling the balance change' + amount);
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: -amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );
    });
}

// update withdraw amount
function depositUpdate(email, amount) {
    console.log('calling the balance change' + amount);
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );
    });
}


// return all users by using the collection.find method
function all() {
    // TODO: populate this function based off the video
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err)  :  resolve(docs);
            });
    })
}


module.exports = { create, findOne, depositUpdate, withdrawUpdate, all};
