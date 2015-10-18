var mongoose = require('mongoose');

var hikeSchema = mongoose.Schema({
    count: count,
    postContent: postContent,
    date: date,
});

var Hike = mongoose.model('Hike', hikeSchema);


module.exports = Hike;