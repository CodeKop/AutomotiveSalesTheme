<section class="featured-products container-fluid border-bottom">
  <div class="featured-products py-2 container border-left border-right">
    <div class="row justify-content-center border-bottom">
      <h2 class="h2 products-section-title text-capitalize">
        {l s='Popular Products' d='Shop.Theme.Catalog'}
      </h2>
    </div>
    <div class="row">
      <div class="featured-products-list swiper-container position-relative">
        <a class="swiper-button-prev" href="#prodcarousel" role="button" data-slide="prev">
          <span class="swiper-button-icon border-top border-left border-bottom" aria-hidden="true"><i class="material-icons">&#xe314;</i></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="swiper-button-next" href="#prodcarousel" role="button" data-slide="next">
          <span class="swiper-button-icon border-top border-right border-bottom" aria-hidden="true"><i class="material-icons">&#xe315;</i></span>
          <span class="sr-only">Next</span>
        </a>

        {include file="catalog/_partials/productlist.tpl" products=$products cssClass="swiper-wrapper row" itemCssClass="swiper-slide"}
      </div>
    </div>
    <div class="row border-top justify-content-center border-top pt-2">
      <a class="all-product-link h6" href="{$allProductsLink}">
        <span class="btn_text">{l s='All products' d='Shop.Theme.Catalog'}</span>
        <i class="material-icons btn_icon ml-2">&#xe5c8;</i>
      </a>
    </div>
  </div>
</section>
