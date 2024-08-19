const Datastore = require("nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "../data/volunteers.db"),
  autoload: true,
});

function createVolunteer(volunteerData, callback) {
  db.insert(volunteerData, callback);
}

function getAllVolunteers(callback) {
  db.find({}, callback);
}

function updateVolunteer(id, updatedData, callback) {
  db.update({ _id: id }, { $set: updatedData }, {}, callback);
}

function deleteVolunteer(id, callback) {
  db.remove({ _id: id }, {}, callback);
}

module.exports = {
  createVolunteer,
  getAllVolunteers,
  updateVolunteer,
  deleteVolunteer,
};
