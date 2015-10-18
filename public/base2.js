$(document).ready(function(){

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	var count = 1;
	var hikes = [];

	function Post(content) {	
		var publishedPosts = '<div id="#published-post-item" >' + this.contents + '</div>';	
		this.count = count;
		this.content = content;
	}

	$('#new-tiny-post').submit(function(e) {
		e.preventDefault();
		var postContent = $('#blogText').val();
		var date = new Date();
		var time = date.getTime();
		var dayNames = ['noday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		var day = dayNames[date.getDay()];
		var displayDate = (date.getMonth()+1) + '/' + (date.getDate()) + '/' + date.getFullYear();

		new Post(postContent);
		if (postContent) {
			var hike = {
				count: count,
				postContent: postContent,
				day: day,
				displayDate: displayDate	
			};

			hikes.push(hike);
			console.log(hikes);
			count++;
		}
		$('#blogText').val('');
	});

	$('#published-post-list').on("click", ".delete", function handleClick(event){
		console.log("delete button works");
		$(this).parents('.list-group-item').remove();
	});
});	

