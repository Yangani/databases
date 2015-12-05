var models = require('../models/index.js');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("get Server: ");
      models.messages.get(req.body);


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log(req.body);
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

