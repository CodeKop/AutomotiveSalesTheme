import 'expose-loader?Tether!tether';
import 'bootstrap/dist/js/bootstrap.min';
import 'flexibility';
import 'bootstrap-touchspin';
import 'jquery-touchswipe';
import Swiper from 'swiper';

import './responsive';
import './checkout';
import './customer';
import './listing';
import './product';
import './cart';

import DropDown from './components/drop-down';
import Form from './components/form';
import ProductMinitature from './components/product-miniature';
import ProductSelect from './components/product-select';
import TopMenu from './components/top-menu';
import SearchBar from './components/search-bar';

import prestashop from 'prestashop';
import EventEmitter from 'events';

import './lib/bootstrap-filestyle.min';
import './lib/jquery.scrollbox.min';

import './components/block-cart';
import $ from "jquery";

// "inherit" EventEmitter
for (var i in EventEmitter.prototype) {
	prestashop[i] = EventEmitter.prototype[i];
}

let swiperOptions = {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	watchOverflow: true,
};
let featuredSwiperOptions = {
	spaceBetween: 0,
	speed: 350,
	loop: true,

	slidesPerView: 1,
	spaceBetween: 0,

	breakpoints: {
		576: {
			slidesPerView: 2
		},
		768: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 4
		},
	}
};

$(document).ready(() => {
	let dropDownEl = $('.js-dropdown');
	const form = new Form();
	let topMenuEl = $('.js-top-menu ul[data-depth="0"]');

	let dropDown = new DropDown(dropDownEl);
	let topMenu = new TopMenu(topMenuEl);
	let productMinitature = new ProductMinitature();
	let productSelect = new ProductSelect();
	let searchBar = new SearchBar();

	dropDown.init();
	form.init();
	topMenu.init();
	productMinitature.init();
	productSelect.init();
	searchBar.init();

	if (prestashop.configuration.is_catalog) {
		$("*[id^='_desktop_cart'],*[id^='_desktop_cart']").each((idx, el) => {
			el.remove();
		});
	}

	$('.swiper-container').each((idx, el) => {
		let options;

		if ($(el).hasClass('featured-products-list')) {
			options = $.extend(true, {}, swiperOptions, featuredSwiperOptions);
		} else {
			options = swiperOptions;
		}

		var swiper = new Swiper(el, options);
	});

	$('.carousel[data-touch="true"]').swipe({
		swipe(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				$(this).carousel('next');
			}
			if (direction == 'right') {
				$(this).carousel('prev');
			}
		},
		allowPageScroll: 'vertical',
	});
});