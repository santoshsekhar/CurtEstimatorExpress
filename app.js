var express = require('express'),
    url = require("url"),  
    path = require("path"),  
    fs = require("fs");

var port = process.env.PORT || 3000;
var app = express();
app.get("/", function (req, res) {
 res.send(JSON.stringify({ Hello: "World"}));
});
app.listen(process.env.PORT);