var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      //get data from database

      //parse data

      //build the message

      //respond with the message(s)

    }, // a function which produces all the messages
    post: function (message) {
      //convert to SQL format

      //send data into the database

      //respond with indication of success

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

