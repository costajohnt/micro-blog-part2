$(document).ready(function(){

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	function refreshHikes() {
		var html = new EJS({url: 'recentHikes.ejs'}).render(window.hikes);
		$('#published-post-list').empty();
		$('#published-post-list').prepend(html);
	}

	refreshHikes();

	var count = 1;

	$('#new-tiny-post').submit(function(e) {
		e.preventDefault();
		var postContent = $('#blogText').val();
		var date = new Date();
		var time = date.getTime();
		var dayNames = ['noday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		var day = dayNames[date.getDay()];
		var displayDate = (date.getMonth()+1) + '/' + (date.getDate()) + '/' + date.getFullYear();

		var hikeData = {
			postContent: postContent,
    		count : count,
    		day : day,
    		displayDate : displayDate
		};

		$.post('/api/hikes', hikeData, function (response){
		 	window.hikes.push(response);
		 	refreshHikes();
		});

		count++;
		$('#blogText').val('');

	});

	$('#published-post-list').on("click", ".delete", function handleClick(event){
		console.log("delete button works");
		$(this).parents('.list-group-item').remove();
	});
});	

