var express = require("express");

var quotesController = require("../controllers/quotesController");

var router = new express.Router();

// Get all users in the db
router.get("/info/:id?", quotesController.getUsers);
// get all the audio links in the db
router.get("/audio", quotesController.getAudio);
// Create a new user using data passed in req.body
router.post("/user", quotesController.create);
// Create a new audio entry using data passed in req.body
router.post("/audio", quotesController.createAudio);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/user/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", quotesController.destroy);
// 
router.post("/credentials", quotesController.logUserIn);
module.exports = router;
