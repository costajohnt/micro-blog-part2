//ensure .js file is linked to .html
console.log("Sanity Check: JS is working!");
//document is waiting for user input
$(document).ready(function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	  });
	  //I want to start my post count at 1
	  var count = 1;
	  //the OOP constructor below creates new post objects with user
	  //defined content, plus the current date and order number of post
	  function Post(content) {	
	  //publishedPosts variable sets up where the new content the user creates will be placed on the page.
	  var publishedPosts = '<div id="#published-post-item" >' + this.contents + '</div>';	
	  	//count is the order number of the post
		this.count = count;
		//content is created by the user in the input field.
		this.content = content;
		//Date is the date in which the new post was created. 
		//close Post function
	    }
	    //blogText input is waiting for a click or return key 
		//stroke to submit the value
	$('#new-tiny-post').submit(function(e) {
		//prevent default action of submit button
		e.preventDefault();
		//variable for the input provided by the user
		var postContent = $('#blogText').val();
		//variable for the date, the system just knows this
		var date = new Date();
		//get day of the week
		var day = date.getDay();
		//get the time of day
		var time = date.getTime();
		//var day retrieves the number value of the week day.  The array below helps it identify the corresponding day name
		var dayNames = ['noday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		//variable to display date in this form 12/12/2012
		var displayDate = (date.getMonth()+1) + '/' + (date.getDate()) + '/' + date.getFullYear();
		//run the post function OOP constructor and put the user input values through it
		new Post(postContent);
		//but only if there is content in the input field...
	  	if (postContent) {
	  		//if there is content that is submittd, prepend it to the top of the bottom div in its own new div
	  		//italisize the count and date, make the content of the post bold
			$("#published-post-list").prepend("<i>" + '<div class="list-group-item">' + count + "</i>" + "<br>" + "<b>" + postContent + "</b>" + "<br>" + "<i>" + (dayNames[date.getDay()]) + " " + displayDate + '</div>' + "</i>");
			//each time we run this function, add one to the number of posts
			count++;
			//logs count to make sure its working
			console.log(count);
		}
			//logs Post to make sure its working
			console.log(Post);
			//resets the input value after submission so the user does not need to delete the content before publishing a new post
			$('#blogText').val('');
	});
});	


//Below is my original code that I refactored (with help) into an OOP constructor.
// $(document).ready(function(){
// 	//blogText input is waiting for a click or return key 
// 	//stroke to submit the value
// 	$('#new-tiny-post').submit(function(e) {
// 		//prevent default action of submit form
// 		e.preventDefault();
// 			//postContent is the value you put into the input
// 			var postContent = $('#blogText').val();
// 			//publishedPosts places the postContent in a line of <ul> #published-post-list
// 			var publishedPosts = '<li class="published-post-item" >' + postContent + '</li>';
// 			//the line below adds the publishedPosts line we created to the <ul>
// 			$('#published-post-list').prepend(publishedPosts);
// 			//below we reset the value of our input field after submission
// 			$('#blogText').val('');
// 		});	
// });
