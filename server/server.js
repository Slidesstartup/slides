var express = require('express');
var app = express();
var pg = require('pg');
var path = require('path');


// app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '..', '/public')));


// app.get('/db', function (request, response) {
//  pg.connect('postgres://bwsdqaqzzvafvg:urXX8nOk8dmVYzTkWDEMNxsNN4@ec2-54-227-250-148.compute-1.amazonaws.com:5432/d3lmjd04uukfu8?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory', function(err, client, done) {
//    console.log(err);
//    console.log(client);
//    client.query('SELECT * FROM test_table', function(err, result) {
//      done();
//      if (err)
//      { console.error(err); response.send("Error " + err); }
//      else
//     //  { response.render('pages/db', {results: result.rows} ); }
//    });
//  });
// })
app.get('/', function(request, response) {
  // response.sendFile('../p')
 // response.render('pages/index');
});

app.listen(5000);
