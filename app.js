const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");

const app = express();

// Set up Mustache as the template engine
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, "public")));

// Route to render the login page
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Log In",
  });
});

// Route to render the home page (optional, just for testing)
app.get("/", (req, res) => {
  res.render("layout", {
    title: "Home",
    content: "Welcome to the home page!", // Placeholder content for testing
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
