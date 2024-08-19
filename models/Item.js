const Datastore = require("nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "../data/items.db"),
  autoload: true,
});

function createItem(itemData, callback) {
  db.insert(itemData, callback);
}

function getAllItems(callback) {
  db.find({}, callback);
}

function updateItem(id, updatedData, callback) {
  db.update({ _id: id }, { $set: updatedData }, {}, callback);
}

function deleteItem(id, callback) {
  db.remove({ _id: id }, {}, callback);
}

module.exports = {
  createItem,
  getAllItems,
  updateItem,
  deleteItem,
};
