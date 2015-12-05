var db = require('../db/index.js').dbConnection;
var mysql      = require('mysql');

module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (message) {
      console.log("Hi Carl: ", message);
      db.query('INSERT INTO messages (username, roomname, text) VALUES( ' + "'"+ message.username + "'," + "'" + message.roomname + "'," + "'" + message.text + "'" +');'
      );




    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

