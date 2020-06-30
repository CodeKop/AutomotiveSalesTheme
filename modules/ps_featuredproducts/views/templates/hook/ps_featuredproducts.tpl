<section class="featured-products container-fluid">
    <div class="container ">
        <div class="row justify-content-center products-section-title">
            <h2 class="h2">
                {l s='Popular Products' d='Shop.Theme.Catalog'}
            </h2>
        </div>
        <div class="row">
            <div class="featured-products-list swiper-container position-relative">
                <a class="swiper-button-prev" href="#prodcarousel" role="button" data-slide="prev">
                    <span class="swiper-button-icon border-top border-right border-bottom" aria-hidden="true"><i class="material-icons">&#xe314;</i></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="swiper-button-next" href="#prodcarousel" role="button" data-slide="next">
                    <span class="swiper-button-icon border-top border-left border-bottom" aria-hidden="true"><i class="material-icons">&#xe315;</i></span>
                    <span class="sr-only">Next</span>
                </a>

                {include file="catalog/_partials/productlist.tpl" products=$products cssClass="swiper-wrapper row" itemCssClass="swiper-slide"}
            </div>
        </div>
        <div class="row products-section-link justify-content-center">
            <a class="all-product-link" href="{$allProductsLink}">
                <span class="btn_text">{l s='All products' d='Shop.Theme.Catalog'}</span>
                <i class="material-icons btn_icon ml-2">&#xe5c8;</i>
            </a>
        </div>
    </div>
</section>
