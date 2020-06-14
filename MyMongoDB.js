const uri = process.env.MongoDBURI;
const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;

MongoClient.connect(uri, (err, db) => {
  if (err) throw err;
});
