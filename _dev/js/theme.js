import 'expose-loader?Tether!tether';
import 'bootstrap/dist/js/bootstrap.min';
import 'flexibility';
import 'bootstrap-touchspin';
import 'jquery-touchswipe';

import './responsive';
// import './featured-products';
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
import Slider from './components/slider';

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

$(document).ready(() => {
  let dropDownEl = $('.js-dropdown');
  const form = new Form();
  let topMenuEl = $('.js-top-menu ul[data-depth="0"]');
  let featuredSliderEl = $('.featured-products-list');
  let brandSliderEl = $('#search_filters_brands');

  let dropDown = new DropDown(dropDownEl);
  let topMenu = new TopMenu(topMenuEl);
  let productMinitature = new ProductMinitature();
  let productSelect = new ProductSelect();
  let searchBar = new SearchBar();
  let featuredSlider = new Slider(featuredSliderEl);
  let brandSlider = new Slider(brandSliderEl, { disabledOpacity: 0.4 });

  dropDown.init();
  form.init();
  topMenu.init();
  productMinitature.init();
  productSelect.init();
  searchBar.init();
  featuredSlider.init();
  brandSlider.init();

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
