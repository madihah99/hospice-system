const Datastore = require("nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "../data/volunteer-interest.db"),
  autoload: true,
});

function createInterest(volunteerInterestData, callback) {
  db.insert(volunteerInterestData, callback);
}

function getAllInterests(callback) {
  db.find({}, callback);
}

function deleteInterest(id, callback) {
  db.remove({ _id: id }, {}, callback);
}

module.exports = {
  createInterest,
  getAllInterests,
  deleteInterest,
};
