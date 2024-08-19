const Volunteer = require("../models/Volunteer");
const VolunteerInterest = require("../models/VolunteerInterest");
const Manager = require("../models/Manager");

// Display Manager Dashboard
function showDashboard(req, res) {
  Volunteer.getAllVolunteers((err, volunteers) => {
    if (err) return res.status(500).send("Database error.");
    res.render("manager-dashboard", {
      title: "Manager Dashboard",
      volunteers: volunteers,
    });
  });
}

// Handle viewing volunteer interest forms
function viewVolunteerForms(req, res) {
  VolunteerInterest.getAllInterests((err, interests) => {
    if (err) return res.status(500).send("Database error.");
    res.render("volunteer-submissions", {
      title: "View Forms",
      interests: interests,
    });
  });
}

// Handle approving a volunteer interest form
function approveVolunteer(req, res) {
  const id = req.params.id;
  VolunteerInterest.getAllInterests((err, interests) => {
    if (err) return res.status(500).send("Database error.");

    const interest = interests.find((form) => form._id === id);
    if (!interest) return res.status(404).send("Form not found.");

    Volunteer.createVolunteer(interest, (err, newDoc) => {
      if (err) return res.status(500).send("Database error.");

      VolunteerInterest.deleteInterest(id, (err) => {
        if (err) return res.status(500).send("Database error.");
        res.redirect("/manager-dashboard");
      });
    });
  });
}

// Handle declining a volunteer interest form
function declineVolunteer(req, res) {
  const id = req.params.id;
  VolunteerInterest.deleteInterest(id, (err) => {
    if (err) return res.status(500).send("Database error.");
    res.redirect("/manager-dashboard");
  });
}

// Handle manually adding a volunteer
function addVolunteer(req, res) {
  const volunteerData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    joinedAt: new Date(),
  };

  Volunteer.createVolunteer(volunteerData, (err, newDoc) => {
    if (err) return res.status(500).send("Database error.");
    res.redirect("/manager-dashboard");
  });
}

// Handle updating volunteer details
function updateVolunteer(req, res) {
  const id = req.params.id;
  const updatedData = req.body;

  Volunteer.updateVolunteer(id, updatedData, (err, numReplaced) => {
    if (err) return res.status(500).send("Database error.");
    res.redirect("/manager-dashboard");
  });
}

module.exports = {
  showDashboard,
  viewVolunteerForms,
  approveVolunteer,
  declineVolunteer,
  addVolunteer,
  updateVolunteer,
};
