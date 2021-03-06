var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgermodel");

router.get("/", function (req, res){
    res.redirect("/burgers")
})
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        res.render("index",{burger_data:data});
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create( req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        res.status(200).end();
    });
});

// router.delete("/api/burger/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;
