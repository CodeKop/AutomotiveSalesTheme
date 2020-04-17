import $ from 'jquery';
import 'jquery-touchswipe';

export default class Slider {
    constructor(el, options = {}) {
        this.handleSwipe = this.onSwipeStatus.bind(this);
        // this.handleTap = this.onTap.bind(this);

        let baseOptions = {
            enabledOpacity: 1,
            disabledOpacity: 0,
            allowSwipe: false,
            swipeOptions: {
                triggerOnTouchEnd: true,
                swipeStatus: this.handleSwipe,
                allowPageScroll: "vertical",
                threshold: 75,
                cancelThreshold: 75
            },
        };

        this.el = el;
        this.lastScrollLeft = 0;
        this.options = $.extend({}, baseOptions, options);
    }
    init() {
        var slider = this.el.find('.slider'),

            itemsMax = this.el.find('.slider').data('products'),
            itemWidth = this.el.find('.slider .slider-item').outerWidth(true),
            itemDispAmnt = Math.round(slider.width() / itemWidth),

            itemScrollLeft = this.el.find('.slider-controls .slider-control-left'),
            itemScrollRight = this.el.find('.slider-controls .slider-control-right');

        if (this.options.allowSwipe) {
            slider.swipe(this.options.swipeOptions);
        }

        this.el.find('.slider-controls .slider-control-left').click((e) => {
            var itemWidth = this.el.find('.slider .slider-item').outerWidth(true)
            	scrollAmnt = itemWidth;

            if (slider.scrollLeft() % itemWidth > 0) {
				scrollAmnt = slider.scrollLeft() % itemWidth;
            }

            this.el.find('.slider').stop(true, false).animate({
                scrollLeft: '-=' + scrollAmnt;
            }, 675, () => {
                this.updateScroll()
            });
        });
        itemScrollRight.click((e) => {
            var itemWidth = this.el.find('.slider .slider-item').outerWidth(true),
            	scrollAmnt = itemWidth;

            if (slider.scrollLeft() % itemWidth > 0) {
				scrollAmnt = slider.scrollLeft() % itemWidth;
            }

            this.el.find('.slider').stop(true, false).animate({
                scrollLeft: '+=' + scrollAmnt;
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
    updateScroll() {
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

        this.lastScrollLeft = this.el.find('.slider').scrollLeft();
    }
    onSwipeStatus(e, phase, direction, distance) {
        var slider = this.el.find('.slider');

        if (phase === "move" && (direction === "left" || direction === "right")) {
            if (direction === "left") {
                slider.scrollLeft(this.lastScrollLeft + distance);
            } else if (direction === "right") {
                slider.scrollLeft(this.lastScrollLeft - distance);
            }
        } else if (phase === "cancel") {
            slider.animate({
                scrollLeft: this.lastScrollLeft
            }, 'fast');
        } else if (phase === "end") {
            $(e.target).one("click", (e) => e.preventDefault());
            this.updateScroll();
        }        
    }
}
