// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

// express app
var app = express();

// // Sets up the Express app to handle data parsing
// // Static directory to be served
// app.use(express.static(__dirname + "/public"));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ 
//     extended: false 
// }));

// // parse application/json
// app.use(bodyParser.json());

// // method override
// app.use(methodOverride("_method"));

// // handlebars
// app.engine("handlebars", exphbs({ 
//     defaultLayout: "main" 
// }));

// app.set("view engine", "handlebars");

// // routes
// var routes = require("./controllers/controller.js");
// app.use("/", routes);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});