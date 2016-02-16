function load(){

$.ajax({
	url: "http://www.kristinawritesco.de/emojify/js/emojis.json",
	dataType: "jsonp",
	success: function(data) {
	console.log(data)
	},
	type: "GET"
})
}


function emojify() {
	
	// get input text and split into words
	var input = []
	input = String(document.getElementById("input").value).split(/(\s+)/)
	console.log(input)


} // ./ emojify


