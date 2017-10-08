// DEPENDENCIES INSTALLS
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");


// import routes (html, api)
var htmlRoutes = require("./routes/htmlRoutes.js");
var apiRoutes = require("./routes/apiRoutes.js");


// SET EXPRESS AND PORT 
var app = express();
var PORT = process.env.PORT || 4600;


// SETTING MIDDLEWARE
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Let Express know what files are accessible on the front end
app.use(express.static(path.join(__dirname, '/public')));

// Setup body parser to attach any form data to the req.body object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Calling my files.
htmlRoutes(app);
// API routes are for ajax(javascript) requests
apiRoutes(app);

// SETTING PORT TO LISTEN
app.listen(PORT, function() {
    console.log("app listining on PORT " + PORT);
});

  


