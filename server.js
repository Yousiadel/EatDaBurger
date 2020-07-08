// Dependancies
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var exphbs = require("express-handlebars");
// Handlebars middleware
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log(`App listening on PORT" ${PORT}`);
});
