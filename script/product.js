function product(){
	let chooseColorCheckbox = document.querySelector('#choose-color-btn');
	let chooseSizeCheckbox = document.querySelector('#choose-size-btn');
	let chooseQuantityCheckbox = document.querySelector('#choose-quantity-btn');



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