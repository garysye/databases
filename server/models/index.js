var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //get data from database
      var processData = function(data) {
        var resultsArr = [];
        console.log(data)
        data.forEach(function(message) {
          var results = {};
          results.text = message.message_text;
          results.roomname = message.room_id;
          results.objectId = message.message_id;
          results.username = message.user_id;
          resultsArr.push(results);
        });
        console.log(resultsArr);
        callback({results: resultsArr});
      };
      //parse data

      //build the message

      //respond with the message(s)
      db.retrieveMessages(processData);

    }, // a function which produces all the messages
    post: function (message, callback) {
      var sendData = function(results) {
        callback(results);
      };     
      //respond with indication of success
      db.storeMessages(message, sendData);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

