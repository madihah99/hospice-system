const Item = require("../models/item");

// Function to render the Items page
function showItemsPage(req, res) {
  Item.getAllItems((err, items) => {
    if (err) return res.status(500).send("Database error.");

    // Render the items.mustache template with the items data
    res.render("items", { title: "Items", items: items });
  });
}

module.exports = {
  showItemsPage,
};
