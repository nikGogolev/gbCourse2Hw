let navigationMenu = document.querySelector('.navmenu');
let navigationMenuOpen = document.querySelector('.navmenu-open');
let navigationMenuClose = document.querySelector('.navmenu-close');
navigationMenuOpen.onclick = function () {
	if (navigationMenuOpen.checked){
		navigationMenu.style.height = '764px';
	} else {
		navigationMenu.style.height = '0px';
	}
    navigationMenuClose.onclick = function () {
		navigationMenu.style.height = '0px';
		navigationMenuOpen.checked = false;
    }
}

let numberOfItemsInCart = document.querySelector('.menu-list-item-cart-icon-text');
numberOfItemsInCart.textContent = 3;