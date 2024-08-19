const Datastore = require("nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "../data/items.db"),
  autoload: true,
});

function getAllItems(callback) {
  db.find({}, callback);
}

function createItem(itemData, callback) {
  db.insert(itemData, callback);
}

function deleteItem(itemId, callback) {
  db.remove({ id: itemId }, {}, callback);
}

module.exports = {
  getAllItems,
  createItem,
  deleteItem,
};
