var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var audioSchema = new Schema({
    title: String,
    link: String,
    watched: {
        type: Boolean,
        default: false
    }
});

var Audio = mongoose.model("Audio", audioSchema);

module.exports = Audio;