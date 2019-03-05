
//javascript, jQuery

var topics = ['The Simpson', 'Family Guy', 'Pokemon', 'Power Rangers', 'He-man' ];

var button;

var buttonGenerator = function (){
	// the previous div elements are emptied 
	 $("#buttonArea").empty();
	// loops through the array and creates buttons
	for(i = 0; i < topics.length; i++) {
		button = $("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning m-2").attr("data",topics[i]);
		$("#buttonArea").append(button);
	};
}



function getData() {
	var input = $('#searchtext').val();

	var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=DGPdDz5Ss1aUTftFqCHSdlgmHmGyRj3e&limit=4");

	xhr.done(function(response) {


	var jiffs = response.data
	console.log(jiffs);

	for(i in jiffs)
	{
		$('.inner').append("<img src='" + jiffs[i].images.original.url + "' style='height:300px; width:300px;'/>");		
	}
		});
}	

$('#buttonArea').on('click', ".btn", function() {
	var textInside = $(this).text();

	$('#searchtext').val(textInside);
	getData();

	var topicImage = $("<img>").addClass("orangeBorder");

	 			// add states of animate and still which will be toggled 
	 			topicImage.attr("src", results[i].images.fixed_height_still.url);
	 			topicImage.attr("data-still", results[i].images.fixed_height_still.url);
	 			topicImage.attr("data-animate", results[i].images.fixed_height.url)
	 			topicImage.attr("data-state", "still")
	 			topicImage.addClass("gif");
	 			
	 			// image is appended to the div
	 			topicDiv.append(topicImage);
	 			// rating is appended to the div below the gif
	 			topicDiv.append(p); 			
	 			// new images will be placed at the beginning (top) of the containing gif area
	 			$("#inner").prepend(topicDiv);        
 	
  	
 
	});



buttonGenerator();

// new individual button from input elem
var searchgifs = document.getElementById('searchgifs');

searchgifs.addEventListener('click', function() {
	var input1 = document.getElementById('searchtext');
	var btn = document.createElement('button');
	var btnText = document.createTextNode(input1.value);
	var buttonArea = document.getElementById('buttonArea');
	btn.appendChild(btnText);
	buttonArea.appendChild(btn);
	btn.className = ' btn btn-warning';
	buttonArea.appendChild(btn);
});



$("#inner").on("click", ".gif", function(event){
	event.preventDefault();
	
	// gets the current state of the clicked gif 
	var state = $(this).attr("data-state");
	
	// according to the current state gifs toggle between animate and still 
	if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

})
   




// var slideImg = ['a', 'b', 'c'];
// var i;
// var txt='';

// for(var i=0; i < slideImg.length; i++) {
// 	txt+= slideImg[i] + '<br/>';
// }
// document.getElementById('show').innerHTML=txt;
// };


// var viewTopic = ['sam', 'glenda', 'ariana', 'william', 'christian'];
// var text = '';
// var i;

// for(var i=0; i<viewTopic.length; i++) {
// 	text += '<button>' + viewTopic[i] + '</button>';
// }

// document.getElementById('wrapper').innerHTML = text;

