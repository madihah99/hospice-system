// // routes/volunteerRoutes.js
// const express = require("express");
// const router = express.Router();
// const volunteerDashboardController = require("../controllers/volunteerDashboardController");

// // Route to display the Volunteer Dashboard
// router.get(
//   "/volunteer-dashboard",
//   volunteerDashboardController.showVolunteerDashboard
// );

// // Route to handle adding a new item
// router.post(
//   "/volunteer-dashboard/add-item",
//   volunteerDashboardController.addItem
// );

// module.exports = router;

// routes/volunteerRoutes.js
// const express = require('express');
// const router = express.Router();
// const volunteerDashboardController = require('../controllers/volunteerDashboardController');

// function ensureAuthenticated(req, res, next) {
//     if (req.session.volunteerId) {
//         return next();
//     } else {
//         res.redirect('/login');
//     }
// }

// // Route to display the Volunteer Dashboard, only accessible if logged in
// router.get('/volunteer-dashboard', ensureAuthenticated, volunteerDashboardController.showVolunteerDashboard);

// module.exports = router;
// routes/volunteerRoutes.js
