var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    city: String,
    isLoggedIn: {
        type: Boolean,
        default: false
    }
});

var User = mongoose.model("User", userSchema);

module.exports = User;