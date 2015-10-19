//REQUIREMENTS
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./models');



//CONFIG
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost/micro-blog-part2');


//ROUTES
app.get('/', function (req, res) {
  db.Hike.find().exec( function (error, hikesFound){
    res.render('index',{ hikesFound : hikesFound});
  });
});

// app.get('/api/posts', function (req, res) {
	
// });  

// app.get('/api/posts/:id', function (req, res) {
	
// });

app.post('/api/hikes', function (req, res) {
  var hike = req.body;
  db.Hike.create(hike, function (err, hike) {
    res.status(200).json(hike);
  });
});

// app.put('/api/posts/:id', function (req, res) {

// });

// app.delete('/api/posts/:id', function (req, res) {

// });

app.listen(3000, function (){
  console.log("listening on port 3000");
});

// View routes

// A route to show an index page view.
// Ejs templating to show post data in the index.
// API routes

// A route to read all blog posts: GET /api/posts
// A route to read one blog post: GET /api/posts/:id
// A route to create a new blog post: POST /api/posts
// A route to update a single blog post: PUT /api/posts/:id
// A route to delete a single blog post: DELETE /api/posts/:id