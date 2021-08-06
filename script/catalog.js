function catalog(){
	let catalogCategoryTrendingNowCheckbox = document.querySelector('#catalog-category-trending-now-btn');
	let catalogCategorySizeCheckbox = document.querySelector('#catalog-category-size-btn');
	let catalogCategoryPriceCheckbox = document.querySelector('#catalog-category-price-btn');

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