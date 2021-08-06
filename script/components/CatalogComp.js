Vue.component('catalog', {
	props: ['productsnumber'],
	data(){
		return {
			catalogUrl: 'catalog.json',
			allProducts: [],
			products: [],
			imgCatalog: 'https://github.com/nikson1701/onlineStoreAPI/raw/main/imgs/',
		}
	},
	methods: {
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
	mounted(){
		this.$parent.getJson(`${API + this.catalogUrl}`)
		.then(data => {
			this.allProducts = data;
			this.chooseNRandomGoods(this.productsnumber);
			this.$root.$refs.search.filter();
		});
	},
	template:`
		<div class="featured-items-box">
			<product v-for="item of $root.$refs.search.filtered" :key="item.product_id" :img="imgCatalog" :product="item"></product>
		</div>`
});

Vue.component('product', {
	props: ['product', 'img'],
	data(){
		return {

		}
	},
	methods: {
		
	},
	mounted(){
		
	},
	template:`
		<div class="featured-items-box-item">
			<div class="featured-items-box-item-image wrapper">
				<img :src="img+product.image_src" alt="catalog image"
					class="featured-items-box-item-image-pic">
				<div class="featured-items-box-item-image-smooth">
					<button class="addtocart-button">
						<svg class="addtocart-button-icon" width="27" height="25">
							<use xlink:href="#addtocart-icon"></use>
						</svg>
						<span class="addtocart-button-text" @click="$root.$refs.cart.addProduct(product)">Add to Cart</span>
					</button>
				</div>
			</div>
			<h3 class="featured-items-box-item-heading"><a href="product.html" class="featured-items-box-item-link">{{product.product_name}}</a></h3>
			<p class="featured-items-box-item-text">{{product.product_description}}</p>
			<p class="featured-items-box-item-cost">\${{product.product_price}}</p>
		</div>`
});
