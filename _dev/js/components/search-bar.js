import $ from 'jquery';

export default class SearchBar {
	init() {
		let self = this;

		this.searchInitHeader();
		this.searchInit404();
	}
	searchInitHeader() {
		let container = $('.header-nav .search-widget');
		let control = $('.header-nav .search-widget .search-toggle');
		let submit = $('.header-nav .search-widget .search-submit');
		let input = $('.header-nav .search-widget .search-input');

		let icon_text_open = 'search';
		let icon_text_close = 'close';

		control.click((e) => {
			$('.header-nav .search-widget .search-input').toggleClass(
				'd-none'
			);

			container.toggleClass('-open');

			$('.header-nav .search-widget .icon-toggle').fadeOut(250, function () {
				// if (container.hasClass('-open')) {
				// 	$(this).text(icon_text_close).fadeIn(250);
				// } else {
				// 	$(this).text(icon_text_open).fadeIn(250);
				// }
				$(this).toggleClass('fa-search fa-times').fadeIn(250);
			});
		});
	}
	searchInit404() {
		let container = $('.page-not-found .search-widget'),
			input = $('.page-not-found .search-widget .search-input'),
			toggle = $('.page-not-found .search-widget .search-toggle');

		input.toggleClass('d-none d-block');
		toggle.toggleClass('d-none');
	}
}
