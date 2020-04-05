import $ from 'jquery';
import DropDown from './drop-down';

export default class TopMenu extends DropDown {
  init() {
    let elmtClass;
    let self = this;
    this.el.find('li').hover((e) => {
      if (this.el.parent().hasClass('mobile')) {
        return;
      }
      const currentTargetClass = $(e.currentTarget).attr('class');
      if (elmtClass !== currentTargetClass) {
        elmtClass = currentTargetClass;

        if (elmtClass && $(e.target).data('depth') === 0) {
          $(`.${elmtClass} .js-sub-menu > .top-menu`).css({
            top: $(`.${elmtClass}`).height() + $(`.${elmtClass}`).position().top
          });
        }
      }

      let subMenu = $(e.currentTarget).children('.sub-menu');
      subMenu.toggleClass('collapse');
    });
    $('#_desktop_top_menu > .top-menu').slideUp(0);
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
    $('#_desktop_top_menu > .menu-header').click((e) => {
      // $(e.currentTarget).siblings('.top-menu').slideToggle();
      var _this = $(e.currentTarget).siblings('.top-menu');
      _this.toggleClass('d-md-flex d-md-none');
    });
    $(window).click((e) => {
      var target = $(e.target),
        dropdown = $('#_desktop_top_menu.js-top-menu');

      if ((target !== dropdown) && (dropdown.has(target).length == 0)) {
        // dropdown.children(".top-menu").slideUp();
        var _this = dropdown.children(".top-menu");
        _this.removeClass('d-md-flex');
        _this.addClass('d-md-none');
      }
    });
    // this.el.on('click', (e) => {
    //   if (this.el.parent().hasClass('mobile')) {
    //     return;
    //   }
    //   e.stopPropagation();
    // });
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