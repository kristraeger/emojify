function emojify() {
	
	// get input text and split in into words
	var input = getElementById("input").text().split()
	console.log(input)

	// get data from local json file
	$.ajax({
		url: "https://github.com/kristraeger/emojify/blob/master/js/emojis.json",
		dataType: "json",
		success: function (emojis) {
			console.log(emojis.keywords)
		}

	})

} // ./ emojify



