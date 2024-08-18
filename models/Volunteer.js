// models/Volunteer.js
const Datastore = require("nedb");
const path = require("path");

// Initialize NeDB and point to the volunteers.db file
const db = new Datastore({
  filename: path.join(__dirname, "../data", "volunteers.db"),
  autoload: true,
});

/**
 * Inserts a new volunteer record into the database.
 * @param {Object} volunteerData - Data of the volunteer to be inserted.
 * @param {Function} callback - Callback function to handle the result.
 */
function createVolunteer(volunteerData, callback) {
  db.insert(volunteerData, callback);
}

// Export the functions related to Volunteer model
module.exports = {
  createVolunteer,
};
