
$.getJSON('./menus.json', function(data) {
	var html = '';
	data.forEach(menuItem => {
		if(menuItem.href) {
			//top menu item
			html += `
				<li class="${menuItem.class_name}">
					<a href="${menuItem.href}" class="top">${menuItem.title}</a>
				</li>
			`;
		} else {
			//sub menu item
			html += `
				<li><a href="#" class="top">${menuItem.title}</a>
					<ul class="sub-menu">
			`;
			
			menuItem.menu.forEach(subItem => {
				html += `
					<li>
						<a href="${subItem.href}" class="sub ${menuItem.title}">${subItem.title}</a>
					</li>
				`;
			});
			html += `</ul></li>`;
		}
	});
	document.getElementById('topNav').innerHTML = html;	
});