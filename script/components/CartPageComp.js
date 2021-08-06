Vue.component('cart-page', {
	data(){
		return {
			cart:'',
		}
	},
	methods: {

	},
	mounted(){
		this.cart = this.$root.$refs.cart;
		console.log(this.cart);
	},
	template:`
		<div class="cart-box">
			<cart-page-item  v-for="item of $root.$refs.cart.cartItems" :key="item.product_id" :img="$root.$refs.cart.imgCatalog" :item="item"></cart-page-item>
            <div class="cart-box-buttons">
                <button class="cart-box-buttons-item">Clear shopping cart</button>
                <button class="cart-box-buttons-item">Continue shopping</button>
            </div>
        </div>`
});

Vue.component('cart-page-item', {
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
		<div class="cart-box-item">
			<div class="cart-box-item-img-wrapper">
				<img class="cart-box-item-img" :src="img+item.image_src" alt="cart image">
			</div>
			<div class="cart-box-item-description">
				<h3 class="cart-box-item-description-heading">{{item.product_name}}</h3>
				<span class="cart-box-item-description-price">Price: <span
						class="cart-box-item-description-price-value">\${{item.product_price}}</span></span>
				<span class="cart-box-item-description-color">Color: <span
						class="cart-box-item-description-color-value">Red</span></span>
				<span class="cart-box-item-description-size">Size: <span
						class="cart-box-item-description-size-value">XL</span></span>
				<span class="cart-box-item-description-quantity">Quantity: {{item.quantity}}</span>
			</div>
			<button class="cart-box-item-delete" @click="$root.$refs.cart.removeProduct(item)">
				<svg class="cart-box-item-delete-icon" width="18" height="18">
					<use xlink:href="#close-icon"></use>
				</svg>
			</button>
		</div>`
});
