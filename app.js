const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const app = express();
const PORT = 3000;

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a route for the home page
app.get("/", (req, res) => res.render("home"));

// Listen on the defined port
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
