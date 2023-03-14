const mongoose = require('mongoose');

// the URI Connection String to connect to single standalone instance 'sampleform' of mongodb running locally on default port 27017
var connectionUrl = 'mongodb://localhost:27017/sampleform';

//this function establishes a connection between node.js app and mongodb database running locally
//useNewUrlParser: You can set it True to use the new MongoDB connection string parser.
//useUnifiedTopology: You can set it True to use the new Server Discovery and Monitoring engine
var conn = mongoose.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log('Connected to Database!');
  }
);

module.export = conn;
