var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var path = require('path');

app.use(express.static( __dirname + '/angular/dist/angular' ));

// Routes
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})




