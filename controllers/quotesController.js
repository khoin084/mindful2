var User = require("../models/User");
var Audio = require("../models/Audio");
var path = require("path");
var bcrypt = require('bcrypt');
var passport = require("passport");
var passportlocal = require("passport-local");

module.exports = {
  // This method handles retrieving quotes from the db
  getUsers: function(req, res) {
    console.log("inside of getUsers()");
    console.log(req.body);
    
    User.find()
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles retrieving quotes from the db
  getAudio: function(req, res) {
    console.log("inside of getAudio()");
    console.log(req.body);
    
    Audio.find()
      .then(function(doc) {
        console.log("retreived audio: ", doc);
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new users
  create: function(req, res) {
    let password = req.body.password;
    console.log("hitting submit button took you here: quotesController.");
    console.log(req.body);
    console.log(req.body.password);

    bcrypt.hash(password, 10, function(err, hash) {
      if(err) console.log(err);
      //encrypting the user password witih hash.
      req.body.password = hash;
      console.log(req.body.password);
      //after encryption - save in the DB 
      User.create(req.body).then(function(doc) {
      console.log(doc);
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      }); 
    });     
  },
   // This method handles creating new audio links
  createAudio: function(req, res) {
    let title = req.body.title;
    let link = req.body.link;
    console.log(req.body);

    Audio.create(req.body).then(function(doc) {
    console.log(doc);
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    }); 
    
  },
  // This method handles updating quotes
  update: function(req, res) {
    console.log("you are inside the update() in controller");
    console.log("body:", req.body);
    console.log("_id:", req.params.id);
    User.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting quotes
  destroy: function(req, res) {
    QUser.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method uses passport to authenticate the user
  logUserIn: function(req, res) {
    console.log("inside of quotesController: ", req.body);
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.body);
    //tryting to find if user exist in DB
    //note, when using findOne, first arguement is an obj and specify parameter.
    User.findOne({username: req.body.username}).then( (data) => {
        console.log(data);
        if(data === null) {
          res.send("User is not registered");
        }
        // built-in method from bcrypt to compare the candidate password 
        // with hashed password currently in the db.
        bcrypt.compare(password, data.password, function(err, isMatch) {
          if(err) throw err;
          console.log(isMatch);
          if(isMatch) {
              // note, send back the entire user.
              res.send(data);
          }
          else {
              res.send("Password incorrect");
          }
        });
        // console.log("found user: " + doc);
        //res.json(data);
      });                            
  }
  
};
