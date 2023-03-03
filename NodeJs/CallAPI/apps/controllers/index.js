var express = require("express");
var router = express.Router();
router.use("/student", require(__dirname + "/studentController"));
router.get("/", function(req,res){
    res.json({"message" : "this is index page"});
});
module.exports = router;