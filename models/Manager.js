const Datastore = require("nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "../data/managers.db"),
  autoload: true,
});

function createManager(managerData, callback) {
  db.insert(managerData, callback);
}

function authenticateManager(email, password, callback) {
  db.findOne({ email: email, password: password }, callback);
}

module.exports = {
  createManager,
  authenticateManager,
};
