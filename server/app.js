var express = require('express');
var db = require('./db/index.js').dbConnection;

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
// app.use("/classes", router);

var redUrl = new RegExp("/(.+)")

app.get('/classes', function (req, res) {
  var data = {
    "results":""
  }
  db.query('SELECT * FROM messages;', function(err, rows, fields) {
    data["results"] = rows;
    res.json(data);
    console.log("All Info: ", data, rows);
  })

})

app.post('/classes/messages', function(req, res) {
  db.query('INSERT INTO messages (username, roomname, text) VALUES( ' + "'"+ req.body.username + "'," + "'" + req.body.roomname + "'," + "'" + req.body.text + "'" +');');
})

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

