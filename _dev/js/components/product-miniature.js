import $ from 'jquery';

export default class ProductMinitature {
  init() {
    $('.js-product-miniature').each((index, element) => {
      //Limit number of shown colors
      if ($(element).find('.color').length > 5) {
        let count = 0;

        $(element).find('.color').each((index, element) => {
          if (index > 4) {
            $(element).hide();
            count ++;
          }
        });

        $(element).find('.js-count').append(`+${count}`);
      }
    });
  }
}
