// // controllers/volunteerAuthController.js
// const Volunteer = require("../models/Volunteer");
// const bcrypt = require("bcrypt"); // For password hashing

// // Render the login page
// function showLoginPage(req, res) {
//   res.render("login", { title: "Volunteer Login" });
// }

// // Handle login submission
// function loginVolunteer(req, res) {
//   const email = req.body.email;
//   const password = req.body.password;

//   Volunteer.findVolunteerByEmail(email, (err, volunteer) => {
//     if (err) return res.status(500).send("Database error.");
//     if (!volunteer) return res.status(401).send("Invalid email or password.");

//     // Check if the password matches
//     bcrypt.compare(password, volunteer.password, (err, isMatch) => {
//       if (err) return res.status(500).send("Error during authentication.");
//       if (!isMatch) return res.status(401).send("Invalid email or password.");

//       // Password is correct, set up the session
//       req.session.volunteerId = volunteer._id;
//       res.redirect("/volunteer-dashboard");
//     });
//   });
// }

// // Handle logout
// function logoutVolunteer(req, res) {
//   req.session.destroy((err) => {
//     if (err) return res.status(500).send("Error during logout.");
//     res.redirect("/login");
//   });
// }

// module.exports = {
//   showLoginPage,
//   loginVolunteer,
//   logoutVolunteer,
// };
