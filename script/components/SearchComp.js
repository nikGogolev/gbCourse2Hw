Vue.component('search', {
    data(){
        return {
            filtered: [],
			userSearch: '',
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.$root.$refs.catalog.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
        <form class="logo-list-item-search" @submit.prevent="filter">
            <label for="logo-search" class="logo-list-item-search-label">
                <svg class="logo-list-item-search-label-icon" width="27" height="28">
                    <use xlink:href="#search-icon"></use>
                </svg>
            </label>
            <input type="search" id="logo-search" class="logo-list-item-search-input" v-model="userSearch">
        </form>
    `
});

