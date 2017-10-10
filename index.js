
$.getJSON('./menus.json', function(data) {
	data.forEach(chunk => console.log(chunk));
});