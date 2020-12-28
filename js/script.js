let link = (a)=>{
	if (a == 0) {
		let head = document.getElementById(`top`);
		head.style.transition = '1s';
		head.style.background = '#c6fde4';
		setTimeout(()=>{
			head.style.background = '#FFF';
		},1000);
	}
	if (a == 1) {
		let how = document.getElementById(`how`);
		how.style.transition = '1s';
		how.style.background = '#c6fde4';
		setTimeout(()=>{
			how.style.background = '#FFF';
		},1000);
	}
	if (a == 2) {
		let know = document.getElementsByClassName(`know__row-block`);

		for(let i = 0; i < know.length; i++){
			know[i].style.transition = '1s';
			know[i].style.background = '#c6fde4';
			setTimeout(()=>{
				know[i].style.background = '#FAFCFF';
			},1000);
		}
		
	}
	if (a == 3) {
		let sources = document.getElementById('sources');
		sources.style.transition = '1s';
		sources.style.background = '#c6fde4';
		setTimeout(()=>{
			sources.style.background = '#FAFCFF';
		},1000);
	}
}

let posTop = ()=>{
	let pos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	pos > 108 ? document.getElementById(`up`).style.display = 'block' : document.getElementById(`up`).style.display = 'none' 
}
setInterval(posTop, 300);