var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //get the messages from our SQL database
      var callback = function(data) {
        res.writeHead(200);
        console.log(JSON.stringify(data));
        res.end(JSON.stringify(data));
      };
      //return that data
      models.messages.get(callback);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //pass the message forward
      console.log(req.body);
      var callback = function(result) {
        res.writeHead(201);
        res.end();
      };
      //repond with indication of success
      models.messages.post(req.body, callback);
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

