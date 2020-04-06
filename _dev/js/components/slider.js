import $ from 'jquery';

export default class Slider {
	constructor(el, options = {}) {
		let baseOptions = {
			enabledOpacity: 1,
			disabledOpacity: 0
		};

		this.el = el;
		this.options = $.extend({}, baseOptions, options);
	}
	init() {
		var slider = this.el.find('.slider'),

			itemsMax = this.el.find('.slider').data('products'),
			itemWidth = this.el.find('.slider .slider-item').outerWidth(true),
			itemDispAmnt = Math.round(slider.width() / itemWidth),

			itemScrollLeft = this.el.find('.slider-controls .slider-control-left'),
			itemScrollRight = this.el.find('.slider-controls .slider-control-right');

		this.el.find('.slider-controls .slider-control-left').click((e) => {
			var itemWidth = this.el.find('.slider .slider-item').outerWidth(true);

			this.el.find('.slider').stop(true, false).animate({
				scrollLeft: '-=' + itemWidth
			}, 675, () => {
				this.updateScroll()
			});
		});
		itemScrollRight.click((e) => {
			var itemWidth = this.el.find('.slider .slider-item').outerWidth(true);

			this.el.find('.slider').stop(true, false).animate({
				scrollLeft: '+=' + itemWidth
			}, 675, () => {
				this.updateScroll()
			});
		});

		this.el.find('.slider').scrollLeft(0);

		if (itemsMax <= itemDispAmnt) {
			itemScrollLeft.animate({
				opacity: this.options.disabledOpacity
			}, 0);
			itemScrollRight.animate({
				opacity: this.options.disabledOpacity
			}, 0);
		} else {
			// itemScrollLeft.css('visibility', 'visible');
			// itemScrollLeft.animate({
			// 	opacity: 1
			// }, 0);

			// itemScrollRight.css('visibility', 'visible');
			// itemScrollRight.animate({
			// 	opacity: 1
			// }, 0);
			itemScrollLeft.animate({
				opacity: this.options.enabledOpacity
			}, 0);
			itemScrollRight.animate({
				opacity: this.options.enabledOpacity
			}, 0);
		}
		this.updateScroll();
	}
	updateScroll(itemWidth) {
		var itemsMax = this.el.find('.slider').data('products'),
			itemWidth = this.el.find('.slider .slider-item').outerWidth(true),
			itemDispAmnt = Math.round(this.el.find('.slider').width() / itemWidth),
			itemIndex = Math.round(this.el.find('.slider').scrollLeft() / itemWidth),

			itemScrollLeft = this.el.find('.slider-controls .slider-control-left'),
			itemScrollRight = this.el.find('.slider-controls .slider-control-right');

		if (itemIndex <= 0) {
			// itemScrollLeft.animate({
			// 	opacity: 0
			// }, 'medium', () => {
			// 	var _this = itemScrollLeft;
			// 	_this.css('visibility', 'hidden');
			// });
			itemScrollLeft.animate({
				opacity: this.options.disabledOpacity
			}, 'medium');
			itemIndex = 0;
		} else {
			// itemScrollLeft.css('visibility', 'visible');
			// itemScrollLeft.animate({
			// 	opacity: 1
			// }, 'medium');
			itemScrollLeft.animate({
				opacity: this.options.enabledOpacity
			}, 'medium');
		}
		
		if (itemIndex >= (itemsMax - itemDispAmnt)) {
			itemScrollRight.animate({
				opacity: this.options.disabledOpacity
			}, 'medium');
			itemIndex = itemsMax - itemDispAmnt;
		} else {
			itemScrollRight.animate({
				opacity: this.options.enabledOpacity
			}, 'medium');
		}
	}
}

// $(document).ready(() => {
//     $('.featured-products .featured-control-left').click((e) => {
//         var productWidth = $('.featured-products .products .product-miniature').outerWidth(true);

//         $('.featured-products .products').animate({
//             scrollLeft: '-=' + productWidth
//         }, 675, () => {
//             updateFeaturedScroll()
//         });
//     });
//     $('.featured-products .featured-control-right').click((e) => {
//         var productWidth = $('.featured-products .products .product-miniature').outerWidth(true);

//         $('.featured-products .products').animate({
//             scrollLeft: '+=' + productWidth
//         }, 675, () => {
//             updateFeaturedScroll()
//         });
//     });

//     if (productMax <= productDisplayAmnt) {
//         featuredScrollLeft.fadeOut(0);
//         featuredScrollRight.fadeOut(0);
//     } else {
//         featuredScrollLeft.fadeIn(0);
//         featuredScrollRight.fadeIn(0);
//     }
//     updateFeaturedScroll();
// });

// function updateFeaturedScroll() {
//     var productMax = $('.featured-products .products').data('products'),
//         productWidth = $('.featured-products .products .product-miniature').outerWidth(true),
//         productDisplayAmnt = $('.featured-products .products').width() / productWidth,
//         productIndex = $('.featured-products .products').scrollLeft() / productWidth,

//         featuredScrollLeft = $('.featured-products .featured-control-left'),
//         featuredScrollRight = $('.featured-products .featured-control-right');

//     console.log(productIndex);

//     if (productIndex <= 0) {
//         featuredScrollLeft.fadeOut();
//     } else {
//         featuredScrollLeft.fadeIn();
//     }

//     if (productIndex >= (productMax - productDisplayAmnt)) {
//         featuredScrollRight.fadeOut();
//     } else {
//         featuredScrollRight.fadeIn();
//     }
// }
