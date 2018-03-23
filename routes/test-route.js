console.log("included this file");

var db = require("../models/");

module.exports = function(app) {
 
 app.post("/api/getfirstentry", function(req, res) {
    db.Entries.findAll({})
    .then(function(Entries) {
      res.json(Entries);
    });
  });
 
 };

