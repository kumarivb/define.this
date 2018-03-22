console.log("included this file");

var db = require("../models");

module.exports = function(app) {
 
 app.post("/api/getfirstentry", function(req, res) {
    db.Entry.findAll({})
    .then(function(Entry) {
      res.json(Entry);
    });
  });
 
 };