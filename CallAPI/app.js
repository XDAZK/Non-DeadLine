var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var controller = require(__dirname + "/apps/controllers");
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use("/public", express.static(__dirname + "/public"));
app.use(controller);
var server = app.listen(3000, function(){
    console.log("server is running...");
});