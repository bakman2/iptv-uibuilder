'use strict';

const home = httpVueLoader('components/home.vue');
const countries = httpVueLoader('components/countries.vue');
const country = httpVueLoader('components/country.vue');
const categories = httpVueLoader('components/categories.vue');
const category = httpVueLoader('components/category.vue');
const search = httpVueLoader('components/search.vue');

const routes = [
	{ path: '/', component: home },
	{ path: '/countries', component: countries },
	{ path: '/country/:country', component: country },
	{ path: '/categories', component: categories },
	{ path: '/category/:category', component: category },
	{ path: '/search', component: search },
];

const router = new VueRouter({
	routes,
});

var app1 = new Vue({
	router,
	el: '#app',
	data: {
		countries: [],
		categories: [],
		channels: [],
		category: [],
		country: [],
		title: '',
		src: '',
		search: '',
	},

	methods: {
		submit(el) {
			this.search = el;
			if (el.length < 2) {
				this.channels = [];
			} else {
				uibuilder.send({ payload: { search: el.toLowerCase() } });
			}
			this.$router.push('/search').catch(err => {});
		},
	},

	mounted: function() {
		uibuilder.start();

		var vueApp = this;

		uibuilder.onChange('msg', function(msg) {
			if (msg.payload.hasOwnProperty('countries')) {
				vueApp.countries = msg.payload.countries;
			}
			if (msg.payload.hasOwnProperty('categories')) {
				vueApp.categories = msg.payload.categories;
			}
			if (msg.payload.hasOwnProperty('channels')) {
				vueApp.channels = msg.payload.channels;
			}
			if (msg.payload.hasOwnProperty('results')) {
				if (!msg.payload.results[0].title === false) {
					console.log(msg);
					vueApp.channels = msg.payload.results;
				} else {
					vueApp.channels = [];
				}
			}
		});
	},
});
