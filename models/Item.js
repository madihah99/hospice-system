// models/Item.js
const Datastore = require("nedb");
const path = require("path");

// Initialize the database
const db = new Datastore({
  filename: path.join(__dirname, "../data/items.db"),
  autoload: true,
});

// Function to get all items
function getAllItems(callback) {
  db.find({}, callback);
}

// Function to add a new item
function createItem(itemData, callback) {
  db.insert(itemData, callback);
}

module.exports = {
  getAllItems,
  createItem,
};
