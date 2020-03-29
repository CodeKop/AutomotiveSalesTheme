import $ from 'jquery';
import prestashop from 'prestashop';

function setUpCheckout() {
  $('.js-terms a').on('click', (event) => {
    event.preventDefault();
    var url = $(event.target).attr('href');
    if (url) {
      // TODO: Handle request if no pretty URL
      url += `?content_only=1`;
      $.get(url, (content) => {
        $('#modal').find('.js-modal-content').html($(content).find('.page-cms').contents());
      }).fail((resp) => {
        prestashop.emit('handleError', {eventType: 'clickTerms', resp: resp});
      });
    }

    $('#modal').modal('show');
  });

  $('.js-gift-checkbox').on('click', (event) => {
    $('#gift').collapse('toggle');
  });
}

function toggleImage() {
  // Arrow show/hide details Checkout page
  $('.card-block .cart-summary-products p a').on('click', function (icon) {
    icon = $(this).find('i.fa');
    
    if (icon.hasClass('fa-chevron-down')) {
      icon.removeClass('fa-chevron-down');
      icon.addClass('fa-chevron-up');
    } else {
      icon.removeClass('fa-chevron-up');
      icon.addClass('fa-chevron-down');
    }
    // if (icon.text() == 'expand_more') { 
    //   icon.text('expand_less'); 
    // } else { 
    //   icon.text('expand_more'); 
    // }
  });
}

$(document).ready(() => {
  if ($('body#checkout').length === 1) {
    setUpCheckout();
    toggleImage();
  }

  prestashop.on('updatedDeliveryForm', (params) => {
    if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
        return;
    }
    // Hide all carrier extra content ...
    $(".carrier-extra-content").hide();
    // and show the one related to the selected carrier
    params.deliveryOption.next(".carrier-extra-content").slideDown();
  });
});
