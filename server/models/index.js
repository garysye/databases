var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //get data from database
      var processData = function(data) {
        var resultsArr = [];
        console.log('heeeres data', data);
        data.forEach(function(message) {
          var results = {};
          results.text = message.message_text;
          results.roomname = message.room_id;
          results.objectId = message.message_id;
          results.username = message.user_id;
          resultsArr.push(results);
        });
        console.log('BAM: resultsArray!', resultsArr);
        callback({results: resultsArr});
      };
      //parse data

      //build the message

      //respond with the message(s)
      retrieveMessages(processData);

    }, // a function which produces all the messages
    post: function (message, callback) {
      var sendData = function(results) {
        callback(results);
      };     
      //respond with indication of success
      storeMessages(message, sendData);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

var retrieveMessages = function(callback) {
  db.query('SELECT * FROM messages', function(err, rows) {
    if (err) {
      console.log(err);
    } else {
    callback && callback(rows);
    console.log("here are the rows: ", rows);
    }
  });
};

var storeMessages = function(message, callback) {
  var messageArr = []; 
  messageArr[0] = message.objectId || null;
  messageArr[1] = message.text || null;
  messageArr[2] = message.username || null;
  messageArr[3] = message.roomname || null; 
  db.query('INSERT INTO messages (message_id, message_text, user_id, room_id) VALUES ( ?, ?, ?, ? )', messageArr, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      callback && callback(result);
    }
  });
};
