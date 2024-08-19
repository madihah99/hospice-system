// // controllers/authController.js
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// // Render the login page
// function showLoginPage(req, res) {
//   res.render("login", { title: "Login" });
// }

// // Handle login submission
// function loginUser(req, res) {
//   const email = req.body.email;
//   const password = req.body.password;

//   User.findUserByEmail(email, (err, user) => {
//     if (err) return res.status(500).send("Database error.");
//     if (!user) return res.status(401).send("Invalid email or password.");

//     // Compare the password with the hashed password in the database
//     bcrypt.compare(password, user.password, (err, isMatch) => {
//       if (err) return res.status(500).send("Authentication error.");
//       if (!isMatch) return res.status(401).send("Invalid email or password.");

//       // Password is correct, set up the session
//       req.session.userId = user._id;
//       req.session.role = user.role; // Save the role in the session

//       // Redirect based on role
//       if (user.role === "manager") {
//         res.redirect("/manager-dashboard"); // Redirect to manager dashboard
//       } else {
//         res.redirect("/volunteer-dashboard"); // Redirect to volunteer dashboard
//       }
//     });
//   });
// }

// // Handle logout
// function logoutUser(req, res) {
//   req.session.destroy((err) => {
//     if (err) return res.status(500).send("Logout error.");
//     res.redirect("/login");
//   });
// }

// module.exports = {
//   showLoginPage,
//   loginUser,
//   logoutUser,
// };
