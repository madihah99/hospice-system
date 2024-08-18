const Datastore = require("nedb"); // Require NeDB, a lightweight database
const db = new Datastore({ filename: "./data/items.db", autoload: true }); // Load the database for items from a file.

// Function to add a new item to the database.
exports.addItem = function (item, callback) {
  db.insert(item, callback); // Inserts a new item into the database and calls back with the result
};

// Function to fetch all items from the database.
exports.getAllItems = function (callback) {
  db.find({}, callback); // Retrieves all items in the database and calls back with the results
};

// Function to remove an item from the database based on its ID.
exports.removeItem = function (id, callback) {
  db.remove({ _id: id }, {}, callback); // Removes the item by its _id and calls back with the result
};
