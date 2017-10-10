document.getElementById('topNav').addEventListener('click', function(e) {
	e.preventDefault();

	const top = document.getElementById('top');
	const sub = document.getElementById('sub');

	if(e.target.classList[0] === 'top') {
		sub.style.display = 'none';
		top.style.display = 'block';
		top.innerHTML = e.target.innerHTML;

	} else if(e.target.classList[0] === 'sub') {
		
		if(e.target.innerHTML === 'Overview') {
			top.style.display ='none';
			sub.style.display ='none';
		} else {
			sub.style.display = 'block';
			top.innerHTML = e.target.classList[1];
			sub.innerHTML = e.target.innerHTML;
		}
	}
})