// controllers/volunteerController.js
const Volunteer = require("../models/Volunteer");

// Display the Volunteer Interest form
function showVolunteerForm(req, res) {
  res.render("volunteer-interest", { title: "Volunteer Interest" });
}

// Handle the submission of the Volunteer Interest form
function submitVolunteerForm(req, res) {
  const volunteerData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    reason: req.body.reason,
    submittedAt: new Date(),
  };

  // Insert the data into the Volunteer model
  Volunteer.createVolunteer(volunteerData, (err, newDoc) => {
    if (err) {
      return res
        .status(500)
        .send("Database error occurred. Please try again later.");
    }
    res.render("thank-you", {
      title: "Thank You",
      message:
        "Thank you for your interest in volunteering. One of our store managers will get in touch with you within 48 hours!",
    });
  });
}

// Export controller functions
module.exports = {
  showVolunteerForm,
  submitVolunteerForm,
};
