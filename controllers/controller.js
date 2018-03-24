// import express and index.js
var express = require("express");

// router
var router = express.Router();

// get models
var db = require("../models");



// routes
// create routes here
// get route -> index, Sets the Main Server Page to Index
router.get("/", function(req, res) {
    res.redirect("/Definitions");
});

router.get("/Definitions", function(req, res) {
    db.Def.findAll ()

    .then(function(dbDef) {
        console.log(dbDef);
        
        var hbsObject = {
            definition: dbDef
        };
        return res.render("card", { hbsObject });
    });
});

// put route -> back to index
router.put("/Definitions/:id", function(req, res) {
    def.update(req.params.id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      // Send back response and let page reload from .then in Ajax
      res.sendStatus(200);
    });
  });




    // router.get("/Definitions", function(req, res) {
    //     // replace old function with sequelize function
    //     definitions.all(function(defData)({
    //         include: [db.Definitions],
    //         order: [
    //           ["entry", "ASC"]
    //         ]
    //       })
    //     })
    //         // use promise method to pass the burgers...
    //         .then(function(definethis_db) {
    //             console.log(definethis_db);
    //             // into the main index, updating the page
    //             var hbsObject = {
    //                 entries: dbEntries
    //               };
    //             return res.render("index", hbsObject);
    //     });
    //});


    // router.get("/cards", function(req, res) {
    //     // replace old function with sequelize function
    //     definethis_db.findAll({
    //         include: [db.Customer],
    //         // Here we specify we want to return our burgers in ordered by ascending burger_name
    //         order: [
    //             ["burger_name", "ASC"]
    //         ]
    //     })
    //         // use promise method to pass the burger
    //         .then(function(dbBurger) {
    //         // into the main index, updating the page
    //         // var hbsObject = {
    //         //     burger: dbBurger
    //         // };
    //         return res.render("index", hbsObject);
    //         });
    //     });



// export router
module.exports = router;


