//REQUIREMENTS
var express = require('express');
var app = express();
var ejs = require('ejs');

//CONFIG
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
// app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/api/posts', function (req, res) {
	
});

app.get('/api/posts/:id', function (req, res) {
	
});

app.post('/api/posts', function (req, res) {

});

app.put('/api/posts/:id', function (req, res) {

});

app.delete('/api/posts/:id', function (req, res) {

});

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