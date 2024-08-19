// // models/User.js
// const Datastore = require("nedb");
// const path = require("path");

// // Initialise the database
// const db = new Datastore({
//   filename: path.join(__dirname, "../data/users.db"),
//   autoload: true,
// });

// // Function to find a user by email
// function findUserByEmail(email, callback) {
//   db.findOne({ email: email }, callback);
// }

// module.exports = {
//   findUserByEmail,
// };
