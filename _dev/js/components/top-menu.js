import $ from 'jquery';
import DropDown from './drop-down';

export default class TopMenu extends DropDown {
  init() {
    let elmtClass;
    let self = this;
    // this.el.find('li').hover((e) => {
    //   if (this.el.parent().hasClass('mobile')) {
    //     return;
    //   }
    //   const currentTargetClass = $(e.currentTarget).attr('class');
    //   if (elmtClass !== currentTargetClass) {
    //     elmtClass = currentTargetClass;

    //     if (elmtClass && $(e.target).data('depth') === 0) {
    //       $(`.${elmtClass} .js-sub-menu > .top-menu`).css({
    //         top: $(`.${elmtClass}`).height() + $(`.${elmtClass}`).position().top
    //       });
    //     }
    //   }
    // });
    this.el.find('.submenu').each((e) => {
      var target = $(e.currentTarget),
        parget = $(e.currentTarget).parent('.category'),
        targetDepth = 2;

        if (target.find(`[data-depth="${targetDepth}"]`).length) {
          parget.addClass('position-static');
          target.addClass('submenu--full');
        }
    });
    $('#_mobile_top_menu .category > a').click((e) => {
      var toggler = $(e.currentTarget).children('.navbar-toggler');

      if ($(e.target).is(toggler) || toggler.find($(e.target))) {
        e.preventDefault();
      }
    });
    $('#menu-icon').on('click', function () {
      $('#mobile_top_menu_wrapper').toggleClass('d-flex d-none');
      self.toggleMobileMenu();
    });
    $('.js-top-menu .category').mouseleave(() => {
      if (this.el.parent().hasClass('mobile')) {
        return;
      }
    });
    $('.js-top-menu .category').click((e) => {
      if (this.el.parent().hasClass('mobile')) {
        if ($(e.target).is('.collapse-icons .fa')) {
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
