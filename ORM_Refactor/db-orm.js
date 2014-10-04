/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('user', {
  username: Sequelize.STRING
});

var Message = sequelize.define('message', {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

sequelize
  .sync()
  .complete(function(err) {
     if (!!err) {
       console.log('An error occurred while creating the table:', err)
     } else {
       console.log('It worked!')
     }
  })

exports.findAllMessages = function(cb) {
  Message.findAll().on('success', function(msgs) {
    cb(null, msgs);
  })
};

exports.findUser = function(username, cb) {
  User.find({ where: { username: username }})
  .complete(function(err, user) {
    cb(user);
  })
};

exports.saveUser = function(username, cb) {
  User.create({ username: username })
  .complete(function(err, user) {
    cb(user);
  });
};

exports.saveMessage = function(message, userid, roomname, cb) {
  Message.create({
    userid: userid,
    text: message,
    roomname: roomname
  })
  .complete(function(err, msg) {
    cb(msg);
  });

};
