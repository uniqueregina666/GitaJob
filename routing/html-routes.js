var path = require("path");
var db = require("../models");

module.exports = function(app) {
 
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/jobPosting.html"));
      });
};