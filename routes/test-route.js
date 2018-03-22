var db = require("../routes");

module.exports = function(app) {
  app.get("/api/getfirstentry", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.definethis_db.findAll({
      include: [db.Post]
    }).then(function(definethis_db) {
      res.json(definethis_db);
    });
  });

  app.get("/api/getfirstentry/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.definethis_db.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(definethis_db) {
      res.json(definethis_db);
    });
  });

  app.post("/api/getfirstentry", function(req, res) {
    db.definethis_db.create(req.body).then(function(definethis_db) {
      res.json(definethis_db);
    });
  });

  app.delete("/api/getfirstentry/:id", function(req, res) {
    db.definethis_db.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(definethis_db) {
      res.json(definethis_db);
    });
  });

};