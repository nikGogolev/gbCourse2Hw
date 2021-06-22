var sheetTitle = document.querySelector('title').textContent;

var navigationMenu = document.querySelector('.navmenu');
var navigationMenuOpen = document.querySelector('.navmenu-open');
var navigationMenuClose = document.querySelector('.navmenu-close');
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

var numberOfItemsInCart = document.querySelector('.menu-list-item-cart-icon-text');
numberOfItemsInCart.textContent = 3;


if (sheetTitle === 'Catalog'){ // Работает на странице каталога
	
	var catalogCategoryTrendingNowCheckbox = document.querySelector('#catalog-category-trending-now-btn');
	var catalogCategorySizeCheckbox = document.querySelector('#catalog-category-size-btn');
	var catalogCategoryPriceCheckbox = document.querySelector('#catalog-category-price-btn');
	
	catalogCategoryTrendingNowCheckbox.onclick = function () {
		if (catalogCategoryTrendingNowCheckbox.checked) {
			catalogCategorySizeCheckbox.checked = false;
			catalogCategoryPriceCheckbox.checked = false;
		}
	}

	catalogCategorySizeCheckbox.onclick = function () {
		if (catalogCategorySizeCheckbox.checked) {
			catalogCategoryTrendingNowCheckbox.checked = false;
			catalogCategoryPriceCheckbox.checked = false;
		}
	}

	catalogCategoryPriceCheckbox.onclick = function () {
		if (catalogCategoryPriceCheckbox.checked) {
			catalogCategoryTrendingNowCheckbox.checked = false;
			catalogCategorySizeCheckbox.checked = false;
		}
	}
}

if (sheetTitle === 'Product'){ // Работает на странице товара
	var chooseColorCheckbox = document.querySelector('#choose-color-btn');
	var chooseSizeCheckbox = document.querySelector('#choose-size-btn');
	var chooseQuantityCheckbox = document.querySelector('#choose-quantity-btn');



	chooseColorCheckbox.onclick = function () {
		if (chooseColorCheckbox.checked) {
			chooseSizeCheckbox.checked = false;
			chooseQuantityCheckbox.checked = false;
		}
	}

	chooseSizeCheckbox.onclick = function () {
		if (chooseSizeCheckbox.checked) {
			chooseColorCheckbox.checked = false;
			chooseQuantityCheckbox.checked = false;
		}
	}

	chooseQuantityCheckbox.onclick = function () {
		if (chooseQuantityCheckbox.checked) {
			chooseColorCheckbox.checked = false;
			chooseSizeCheckbox.checked = false;
		}
	}
}

console.log('script is working');