var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection(function(err) {
  if (err) {
    console.log(err);
  }
  console.log('We did it!');
});
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// Be able to find and retrieve messages
var retrieveMessages = function() {
  var output;
  connection.query('SELECT * FROM messages', function(err, rows) {
    if (err) {
      console.log(err);
    }
    output = rows;
  });
  return output;
};

// Be able to store messages
  
var storeMessages = function(message) {
  var messageArr = [];
  messageArr[0] = "" || message.objectId
  connection.query('')
};