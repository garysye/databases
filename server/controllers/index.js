var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //get the messages from our SQL database

      //return that data

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //pass the message forward

      //repond with indication of success

    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

