import $ from 'jquery';

$(document).ready(() => {
    var productMax = $('.featured-products .products').data('products'),
        productWidth = $('.featured-products .products .product-miniature').outerWidth(true),
        productDisplayAmnt = $('.featured-products .products').width() / productWidth,

        featuredScrollLeft = $('.featured-products .featured-control-left'),
        featuredScrollRight = $('.featured-products .featured-control-right');

    $('.featured-products .products').scrollLeft(0);

    $('.featured-products .featured-control-left').click((e) => {
        var productWidth = $('.featured-products .products .product-miniature').outerWidth(true);

        $('.featured-products .products').animate({
            scrollLeft: '-=' + productWidth
        }, 675, () => {
            updateFeaturedScroll()
        });
    });
    $('.featured-products .featured-control-right').click((e) => {
        var productWidth = $('.featured-products .products .product-miniature').outerWidth(true);

        $('.featured-products .products').animate({
            scrollLeft: '+=' + productWidth
        }, 675, () => {
            updateFeaturedScroll()
        });
    });

    if (productMax <= productDisplayAmnt) {
        featuredScrollLeft.fadeOut(0);
        featuredScrollRight.fadeOut(0);
    } else {
        featuredScrollLeft.fadeIn(0);
        featuredScrollRight.fadeIn(0);
    }
    updateFeaturedScroll();
});

function updateFeaturedScroll() {
    var productMax = $('.featured-products .products').data('products'),
        productWidth = $('.featured-products .products .product-miniature').outerWidth(true),
        productDisplayAmnt = $('.featured-products .products').width() / productWidth,
        productIndex = $('.featured-products .products').scrollLeft() / productWidth,

        featuredScrollLeft = $('.featured-products .featured-control-left'),
        featuredScrollRight = $('.featured-products .featured-control-right');

    console.log(productIndex);

    if (productIndex <= 0) {
        featuredScrollLeft.fadeOut();
    } else {
        featuredScrollLeft.fadeIn();
    }

    if (productIndex >= (productMax - productDisplayAmnt)) {
        featuredScrollRight.fadeOut();
    } else {
        featuredScrollRight.fadeIn();
    }
}