// const Item = require("../models/item");

// // Function to render the Volunteer Dashboard
// function showVolunteerDashboard(req, res) {
//   Item.getAllItems((err, items) => {
//     if (err) return res.status(500).send("Database error.");

//     // Render the volunteer-dashboard.mustache template with the items data
//     res.render("volunteer-dashboard", {
//       title: "Volunteer Dashboard",
//       items: items,
//     });
//   });
// }

// // Function to handle adding a new item
// function addItem(req, res) {
//   const newItem = {
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     store: req.body.store,
//     category: req.body.category,
//     image: "/path/to/default/image.jpg", // You can adjust this or allow image upload
//     id: Date.now().toString(), // Generate a unique ID for the item
//   };

//   Item.createItem(newItem, (err) => {
//     if (err) return res.status(500).send("Database error.");
//     res.redirect("/volunteer-dashboard");
//   });
// }

// // Function to handle removing an item
// function removeItem(req, res) {
//   const itemId = req.body.itemId;

//   Item.deleteItem(itemId, (err) => {
//     if (err) return res.status(500).send("Database error.");
//     res.redirect("/volunteer-dashboard");
//   });
// }

// module.exports = {
//   showVolunteerDashboard,
//   addItem,
//   removeItem,
// };
