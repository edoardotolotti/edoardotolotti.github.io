function menu() {
	var menufull = document.getElementById("menu-fullpage")
	if (menufull.classList.contains('menu-closed')) {
		menufull.classList.remove('menu-closed')
		menufull.classList.add('menu-open')
	} else {
		menufull.classList.remove('menu-open')
		menufull.classList.add('menu-closed')
	}
		
}
