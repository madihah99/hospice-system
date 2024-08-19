const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const path = require("path");
const Datastore = require("nedb");
const volunteerRoutes = require("./routes/volunteerRoutes");
const managerRoutes = require("./routes/managerRoutes");
const app = express();

// Set up Mustache as the template engine
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, "public")));
// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the database
const db = new Datastore({
  filename: path.join(__dirname, "data", "users.db"),
  autoload: true,
});

//Routes
//Route to render the home page
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
  });
});

//Route to render the login page
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Log In",
  });
});

//Route to render the about page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
  });
});

// Route for the Volunteer Interest page
app.use("/", volunteerRoutes);
// Route for the Manager Dashboard page
app.use("/", managerRoutes);

// //for testing
// db.insert(
//   { email: "test@example.com", password: "password123" },
//   (err, newUser) => {
//     if (err) {
//       console.log("Error inserting user:", err);
//     } else {
//       console.log("New user added:", newUser);
//     }
//   }
// );

// Handle login form submission
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Query the database for the user with the provided email
  db.findOne({ email: email }, (err, user) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    if (!user) {
      // No user found with that email
      return res.render("login", {
        title: "Log In",
        error: "Invalid email or password.",
      });
      console.log("invalid email address or password");
    }

    // Check if the password matches
    if (user.password === password) {
      // Password matches, log the user in (this could set a session, etc.)
      res.redirect("/dashboard"); // Redirect to a dashboard or another page
    } else {
      // Password does not match
      res.render("login", {
        title: "Log In",
        error: "Invalid email or password.",
      });
      console.log("invalid email address or password");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
