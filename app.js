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

//Route to render the about page
app.get("/items", (req, res) => {
  res.render("items", {
    title: "Explore our Items",
  });
});

app.get("/volunteer-interest", (req, res) => {
  res.render("volunteer-interest", {
    title: "Volunteer Interest",
  });
});

app.get("/volunteer-dashboard", (req, res) => {
  res.render("volunteer-dashboard", {
    title: "Volunteer Dashboard",
  });
});

app.get("/manager-dashboard", (req, res) => {
  res.render("manager-dashboard", {
    title: "Manager Dashboard",
  });
});

app.get("/add-volunteer", (req, res) => {
  res.render("add-volunteer", {
    title: "Add a Volunteer",
  });
});

// manager user
db.insert(
  { email: "manager@hospice.com", password: "Manager!priv1029" },
  (err, newUser) => {
    if (err) {
      console.log("Error inserting user:", err);
    } else {
      console.log("Manager User added:", newUser);
    }
  }
);

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
      res.redirect("/manager-dashboard"); // Redirect to a dashboard or another page
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
