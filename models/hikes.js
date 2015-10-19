var mongoose = require('mongoose');

var hikeSchema = mongoose.Schema({
    postContent: String,
    count : Number,
  	day: String,
  	displayDate: Date
});

var Hike = mongoose.model('Hike', hikeSchema);
module.exports = Hike;