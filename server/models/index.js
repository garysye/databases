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
    get: function (callback) {
      var formatData = function(data) {
        var resultsArr = [];
        data.forEach(function(user) {
          var result = {};
          result.username = user.username;
          result.id = user.uid;
          result.textColor = user.text_color;
          resultsArr.push(result);
        });
        callback({results: resultsArr});
      };

      retrieveUsers(formatData); 
    },
    post: function (user, callback) {
      var sendUser = function(result) {
        callback(result);
      };

      storeUser(user, sendUser);
    }
  }
};

var retrieveUsers = function(callback) {
  db.query('SELECT * FROM users', function(err, rows) {
    if (err) {
      console.log('retrieveusers', err);
    } else {
      callback && callback(rows);
    }
  });

};

var storeUser = function(user, callback) {
  var userArr = [];
  user[0] = user.username || null;
  user[1] = user.id || null;
  user[2] = user.textColor || null;

  db.query('INSERT INTO users (username, uid, text_color) VALUES (?, ?, ?)', userArr, function(err, result) {
    if (err) {
      console.log('storeuser', err);
    } else {
      console.log('kazaa');
      console.log(result.insertId);
      callback && callback(result);
    }
  });
};

var retrieveMessages = function(callback) {
  db.query('SELECT messages.message_id, messages.message_text, users.username, messages.room_id FROM messages, users WHERE messages.user_id = users.uid ', function(err, rows) {
    if (err) {
      console.log('retreivemessage', err);
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
  messageArr[2] = message.roomname || null; 
  messageArr[3] = message.username || null;
  db.query('INSERT INTO messages (message_id, message_text, room_id, user_id) VALUES (?, ?, ?, (SELECT uid from users WHERE username=?))', messageArr, function(err, result) {
    if (err) {
      console.log('storemessage',err);
    } else {
      callback && callback(result);
    }
  });
};
