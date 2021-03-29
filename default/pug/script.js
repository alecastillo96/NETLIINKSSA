function toggleMenu() {
	let menuToggle = document.querySelector('.toggle');
	let navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
}

feather.replace();