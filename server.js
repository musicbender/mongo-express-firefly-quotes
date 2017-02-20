const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const dbUrl = "mongodb://admin:5Vg4&W$baf@ds157499.mlab.com:57499/firefly-quotes";

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(dbUrl, (err, database) => {
  if (err) return console.log(err);
  db = database;

  app.listen('3000', () => {
    console.log('Listening to 3000');
  });
});

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  db.collection("quotes").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Saved to database");
    res.redirect('/');
  });
});
