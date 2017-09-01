// Strikethrough specific todos with click
// set up for new content to have this listener
// when ul is click run this for the li
colorizeLis();

$("ul").on("click", "li", function() {
	// toggle inactive class
	$(this).toggleClass("inactive");
});

// hide or display the delete btn
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
		colorizeLis();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	//on enter
	if(event.charCode === 13) {
		// get text in input
		let newToDoText = $(this).val();
		//make html content
		let newToDo = $("<li><span class='hidden'><i class='fa fa-trash-o fa-lg' aria-hidden='true'></i></span> " + newToDoText + "</li>");
		//append new todo
		$("ul").append(newToDo);
		colorizeLis();
		// clear input
		$(this).val("");
	}
});

$("ul").on("mouseenter", "li", function() {
	console.log($(this).children().removeClass("hidden"));
});

$("ul").on("mouseleave", "li", function() {
	console.log($(this).children().addClass("hidden"));
});

function colorizeLis() {
	let lis = $("li");
	for(var i = 0; i < lis.length; i++) {
		$(lis[0]).css("background", "#ffffff");
		if(i % 2 >= 1) {
			$(lis[i]).css("background", "#EFEFEF")
		} else {
			$(lis[i]).css("background", "#ffffff")
		}
	}
}

$("#toggle").click(function() {
	$("input[type='text']").fadeToggle();
})



