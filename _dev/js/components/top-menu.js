import $ from 'jquery';
import DropDown from './drop-down';

export default class TopMenu extends DropDown {
  init() {
    let elmtClass;
    let self = this;

    $('#top-menu .dropdown-item + .submenu').each((idx, el) => {
      $(el).addClass('d-block');
      $(el).css('max-height', 'calc(100vh - ' + $(el).offset().top + 'px)');
      $(el).removeClass('d-block');
    });

    $('#_mobile_top_menu .menu--item > a').click((e) => {
      var toggler = $(e.currentTarget).children('.navbar-toggler');

      if ($(e.target).is(toggler) || toggler.find($(e.target))) {
        e.preventDefault();
      }
    });
    $('#menu-icon').on('click', function () {
      $('#mobile_top_menu_wrapper').toggleClass('d-flex d-none');
      self.toggleMobileMenu();
    });
    $('.js-top-menu .menu--item').mouseleave(() => {
      if (this.el.parent().hasClass('mobile')) {
        return;
      }
    });
    $('.js-top-menu .menu--item').click((e) => {
      if (this.el.parent().hasClass('mobile')) {
        if ($(e.target).is('.navbar-toggler .navbar-toggler-icon')) {
          e.preventDefault();
        }
      }
    });
    prestashop.on('responsive update', function (event) {
      $('.js-sub-menu').removeAttr('style');
      self.toggleMobileMenu();
    });
    super.init();
  }

  toggleMobileMenu() {
    $('#header').toggleClass('is-open');
    if ($('#mobile_top_menu_wrapper').is(":visible")) {
      $('#notifications, #wrapper, #footer').hide();
    } else {
      $('#notifications, #wrapper, #footer').show();
    }
  }
}
