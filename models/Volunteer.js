// models/Volunteer.js
const Datastore = require("nedb");
const path = require("path");

// Initialize the database
const db = new Datastore({
  filename: path.join(__dirname, "../data/volunteers.db"),
  autoload: true,
});

// Function to find a volunteer by email
function findVolunteerByEmail(email, callback) {
  db.findOne({ email: email }, callback);
}

// Function to get all volunteers
function getAllVolunteers(callback) {
  db.find({}, callback);
}

// Function to add a new volunteer
function createVolunteer(volunteerData, callback) {
  db.insert(volunteerData, callback);
}

// Function to update a volunteer's details
function updateVolunteer(volunteerId, updatedData, callback) {
  db.update({ _id: volunteerId }, { $set: updatedData }, {}, callback);
}

// Function to delete a volunteer by ID
function deleteVolunteer(volunteerId, callback) {
  db.remove({ _id: volunteerId }, {}, callback);
}

module.exports = {
  findVolunteerByEmail,
  getAllVolunteers,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer,
};
