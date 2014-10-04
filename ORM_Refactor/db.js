

exports.findAllMessages = function(cb){
  var q = 'SELECT * FROM messages';
  dbConnection.query(q, function(err,rows,fields) {
    console.log('findAllMessages ', err, rows);
    cb(err,rows);
  });
};

exports.findUser = function(username, cb){
  var q = 'SELECT * FROM users WHERE username = "'+ username +'"';
  dbConnection.query(q, function(err,rows,fields) {
    cb(rows);
  });
};

exports.saveUser = function(username, cb){
  var q = 'INSERT INTO users (username) VALUES ("' + username + '")';
  dbConnection.query(q, function(err,result,fields) {
    cb([{id: result.insertId}]);
    //assuming that rows[0] contains the row we just inserted:

  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  var q = 'INSERT INTO chat.messages (text,user_id,room_id)';
  q +=    'VALUES ("' + message + '", "' + userid + '",';
  q +=    '(SELECT id FROM chat.rooms WHERE roomname = "' + roomname + '"))';
  dbConnection.query(q, function (err, rows, fields) {
    cb(rows);
  });
};
