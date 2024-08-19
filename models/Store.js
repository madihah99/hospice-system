const Datastore = require("nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "../data/stores.db"),
  autoload: true,
});

function createStore(storeData, callback) {
  db.insert(storeData, callback);
}

function getAllStores(callback) {
  db.find({}, callback);
}

module.exports = {
  createStore,
  getAllStores,
};
