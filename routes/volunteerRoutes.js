// routes/volunteerRoutes.js
const express = require("express");
const router = express.Router();
const volunteerController = require("../controllers/volunteerController.js");

// Route to display the Volunteer Interest form
router.get("/volunteer-interest", volunteerController.showVolunteerForm);

// Route to handle form submission
router.post(
  "/submit-volunteer-interest",
  volunteerController.submitVolunteerForm
);

module.exports = router;
