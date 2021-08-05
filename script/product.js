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

console.log('script is working');

const API = 'https://raw.githubusercontent.com/nikson1701/onlineStoreAPI/main/responses/';

const app = new Vue({
	el: '#app',
	data: {
		catalogUrl: 'catalog.json',
		basketUrl: 'cart.json',
		allProducts: [],
		products: [],
		cartItems: [],
		imgCatalog: 'https://github.com/nikson1701/onlineStoreAPI/raw/main/imgs/',
		isInsvisible: true,
		searchLine: '',
		isCartEmpty: false,
	},
	methods: {
		getJson(url){
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
				console.log(error);
			})
		},
		addProduct(product){
			console.log(product);
			this.getJson(`${API}/addToCart.json`)
			.then(data => {
				if(data.result === 1){
					let find = this.cartItems.find(item => item.product_id === product.product_id);
					if (find){
						find.quantity++;
					} else {
						let newProduct = {
							image_src: product.image_src,
							product_id: product.product_id,
							product_price: product.product_price,
							product_name: product.product_name,
							quantity: 1
						};
						this.cartItems.push(newProduct);
						this.isCartEmpty = false;
					}
				} else {
					alert('Error');
				}
			})
		},
		removeProduct(product){
			this.getJson(`${API}/removeFromCart.json`)
				.then(data => {
				if(data.result === 1){
					let find = this.cartItems.find(item => item.product_id === product.product_id);
					if(product.quantity > 1){
						product.quantity--;
					} else {
						this.cartItems.splice(this.cartItems.indexOf(product), 1);
						if (this.cartItems.length === 0) {this.isCartEmpty = true;};
						
					}
				} else {
					alert('Error');
				}
			})
		},
		showHideCart(){
			this.isInsvisible = !this.isInsvisible;
		},
		filterGoods(value){
			const regexp = new RegExp(value, 'i');
			this.products = this.allProducts.filter(product => regexp.test(product.product_name));
		},	
		chooseNRandomGoods(n){
			let tempSet = new Set();
			while (tempSet.size < n){
				let randomId = Math.ceil(Math.random()*this.allProducts.length);
				let random = this.allProducts.find(item => item.product_id === randomId);
				tempSet.add(random);
			}
			this.products = Array.from(tempSet);
		}
	},
	beforeCreated() {
	
	},
	created() {
		this.getJson(`${API + this.catalogUrl}`)
		.then(data => {
			this.allProducts = data;
			this.chooseNRandomGoods(3);
		});
		this.getJson(`${API + this.basketUrl}`)
		.then(data => {
			this.cartItems = data.contents;
		});
	},
	beforeMount() {
	
	},
	mounted() {
		main();
		product();
	},
	beforeUpdate() {
	
	},
	updated() {
	
	},
	beforeDestroy() {
	
	},
	destroyed() {
	
	},
})