let navigationMenu = document.querySelector('.navmenu');
let navigationMenuOpen = document.querySelector('.navmenu-open');
navigationMenuOpen.onclick = function () {
	if (navigationMenuOpen.checked){
		navigationMenu.classList.add('navmenu-display');
	} else {
		navigationMenu.classList.remove('navmenu-display');
	}
    
    let navigationMenuClose = navigationMenu.querySelector('.navmenu-close');
    navigationMenuClose.onclick = function () {
        navigationMenu.classList.remove('navmenu-display');
		navigationMenuOpen.checked = false;
    }
}

let numberOfItemsInCart = document.querySelector('.menu-list-item-cart-icon-text');
numberOfItemsInCart.textContent = 3;