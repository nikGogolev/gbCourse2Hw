Vue.component('cart', {
	data(){
		return {
			basketUrl: 'cart.json',
			cartItems: [],
			imgCatalog: 'https://github.com/nikson1701/onlineStoreAPI/raw/main/imgs/',
			isInsvisible: true,
			isCartEmpty: false,
		}
	},
	methods: {
		addProduct(product){
			console.log(product);
			this.$parent.getJson(`${API}/addToCart.json`)
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
			this.$parent.getJson(`${API}/removeFromCart.json`)
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
	},
	mounted(){
		this.$parent.getJson(`${API + this.basketUrl}`)
		.then(data => {
			this.cartItems = data.contents;
		});
	},
	template:`
		<div class="cart-block" v-bind:class="{invisible: isInsvisible}">
			<cart-item v-for="item of cartItems" :key="item.product_id" :img="imgCatalog" :item="item"></cart-item>
			<div v-bind:class="{invisible: !isCartEmpty}">Корзина пуста</div>
		</div>`
});

Vue.component('cart-item', {
	props: ['item', 'img'],
	data(){
		return {

		}
	},
	methods: {
		
	},
	mounted(){
		
	},
	template:`
		<div class="cart-item">
			<div class="product-bio">
				<img :src="img+item.image_src" alt="Some image">
				<div class="product-desc">
					<p class="product-title">{{item.product_name}}</p>
					<p class="product-quantity">Количество: {{item.quantity}}</p>
					<p class="product-single-price">\${{item.product_price}} за ед.</p>
				</div>
			</div>
			<div class="right-block">
				<p class="product-price">{{item.quantity*item.product_price}} ₽</p>
				<button class="del-btn" @click="$root.$refs.cart.removeProduct(item)">&times;</button>
			</div>
		</div>`
});
