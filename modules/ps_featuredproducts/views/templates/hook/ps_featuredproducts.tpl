<section class="featured-products py-5 clearfix">
  <h2 class="h2 products-section-title text-capitalize text-center">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <div class="featured-products-list swiper-container position-relative">
    <a class="swiper-button-prev" href="#prodcarousel" role="button" data-slide="prev">
      <span class="swiper-button-icon" aria-hidden="true"><i class="material-icons">&#xe314;</i></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="swiper-button-next" href="#prodcarousel" role="button" data-slide="next">
      <span class="swiper-button-icon" aria-hidden="true"><i class="material-icons">&#xe315;</i></span>
      <span class="sr-only">Next</span>
    </a>

    {* <div class="featured-controls slider-controls">
      <div class="featured-control-left slider-control-left"><i class="fa fa-chevron-left"></i></div>
      <div class="featured-control-right slider-control-right"><i class="fa fa-chevron-right"></i></div>
    </div> *}

    {include file="catalog/_partials/productlist.tpl" products=$products cssClass="swiper-wrapper row" itemCssClass="swiper-slide"}
  </div>
  <a class="all-product-link h6" href="{$allProductsLink}">
    <span class="btn_text">{l s='All products' d='Shop.Theme.Catalog'}</span>
    <i class="material-icons btn_icon ml-3">&#xe5c8;</i>
  </a>
</section>
