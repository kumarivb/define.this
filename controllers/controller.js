// import express and index.js
var express = require("express");
// dt = define this
var dt = require("../models/index.js");

// router
var router = express.Router();

// routes
    // create routes here
    // get route -> index, Sets the Main Server Page to Index
    router.get("/", function(req, res) {
        res.redirect("/index");
    });

    router.get("/cards", function(req, res) {
        // replace old function with sequelize function
        Entries.findAll({
            include: [db.Definitions],
            order: [
              ["entry", "ASC"]
            ]
          })
        })
            // use promise method to pass the burgers...
            .then(function(definethis_db) {
                console.log(definethis_db);
                // into the main index, updating the page
                var hbsObject = {
                    entries: dbEntries
                  };
                return res.render("index", hbsObject);
        });
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


