function main(){
var sheetTitle = document.querySelector('title').textContent;

var navigationMenu = document.querySelector('.navmenu');
var navigationMenuOpen = document.querySelector('.navmenu-open');
var navigationMenuClose = document.querySelector('.navmenu-close');

var menuListItemAccount = document.querySelector('.menu-list-item-account');
var menuListItemCart = document.querySelector('.menu-list-item-cart');

navigationMenuOpen.onclick = function() {
	if (navigationMenuOpen.checked){
		navigationMenu.style.height = '764px';
		if (window.screen.width <= 375){
			menuListItemAccount.style.visibility = 'visible';
			menuListItemCart.style.visibility = 'visible';
		}
	} else {
		navigationMenu.style.height = '0px';
		if (window.screen.width <= 375){
			menuListItemAccount.style.visibility = 'hidden';
			menuListItemCart.style.visibility = 'hidden';
		}
	}
	
    navigationMenuClose.onclick = function() {
		navigationMenu.style.height = '0px';
		navigationMenuOpen.checked = false;
		navigationMenuOpen.onclick();
    }
};

window.onresize = function(){
	if (window.screen.width >= 375){
		menuListItemAccount.style.visibility = 'visible';
		menuListItemCart.style.visibility = 'visible';
	}
}

let numberOfItemsInCart = document.querySelector('.menu-list-item-cart-icon-text');
numberOfItemsInCart.textContent = 3;
}
console.log('script is working');