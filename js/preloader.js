document.body.onload = () => {
	setTimeout(() => {
		document.getElementById(`preloader`).style.display = `none`;
		document.body.style.overflow = 'auto';
	},300);
}