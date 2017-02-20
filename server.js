const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.set('view engine', 'ejs');

const dbUrl = "mongodb://admin:5Vg4&W$baf@ds157499.mlab.com:57499/firefly-quotes";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());

MongoClient.connect(dbUrl, (err, database) => {
  if (err) return console.log(err);
  db = database;

  app.listen('3000', () => {
    console.log('Listening to 3000');
  });
});

app.get('/', (req,res) => {
  db.collection("quotes").find().toArray(function(err, results) {
    if (err) return console.log(err);

    res.render('index.ejs', {quotes: results});
  });
});

app.post('/quotes', (req, res) => {
  db.collection("quotes").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Saved to database");
    res.redirect('/');
  });
});

app.put('/quotes', (req, res) => {
  db.collection('quotes')
    .findOneAndUpdate({name: "Jayne"}, {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    },
    {
      $sort: {
        _id: -1
      }
    },
    (err, result) => {
      if(err) return console.log(err);

      res.send(result);
    })
});

app.delete('/quotes', (req,res) => {
  
})
