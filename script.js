let navigationMenu = document.querySelector('.navigationmenu');
let navigationMenuOpen = document.querySelector('.navigationmenu-open');
navigationMenuOpen.onclick = function () {
	if (navigationMenuOpen.checked){
		navigationMenu.classList.add('display');
	} else {
		navigationMenu.classList.remove('display');
	}
    
    let navigationMenuClose = navigationMenu.querySelector('.navigationmenu-close');
    navigationMenuClose.onclick = function () {
        navigationMenu.classList.remove('display');
		navigationMenuOpen.checked = false;
    }
}

let numberOfItemsInCart = document.querySelector('.menu-list-cart-number');
numberOfItemsInCart.textContent = 3;