var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log('We did it!');
});
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// Be able to find and retrieve messages
var retrieveMessages = function(callback) {
  connection.query('SELECT * FROM messages', function(err, rows) {
    if (err) {
      console.log(err);
    } else {
    callback && callback(rows);
    }
  });
};

// Be able to store messages
  
var storeMessages = function(message, callback) {
  var messageArr = [];
  messageArr[0] = message.objectId || '';
  messageArr[1] = message.text || '';
  messageArr[2] = message.username || '';
  messageArr[3] = message.roomname || ''; 
  connection.query('INSERT INTO messages (message_id, message_text, user_id, room_id) VALUES ( ?, ?, ?, ? )', messageArr, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      callback && callback(result);
    }
  });
};

