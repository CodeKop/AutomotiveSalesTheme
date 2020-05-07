<section class="featured-products position-relative mb-4 clearfix swiper-container">
  <h2 class="h2 products-section-title text-uppercase text-md-left text-center">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <div class="featured-products-list swiper-wrapper position-relative">
    <a class="swiper-button-prev" href="#prodcarousel" role="button" data-slide="prev">
      <span class="slider-control-prev-icon" aria-hidden="true"><i class="material-icons">&#xe314;</i></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="swiper-button-next" href="#prodcarousel" role="button" data-slide="next">
      <span class="slider-control-next-icon" aria-hidden="true"><i class="material-icons">&#xe315;</i></span>
      <span class="sr-only">Next</span>
    </a>

    {* <div class="featured-controls slider-controls">
      <div class="featured-control-left slider-control-left"><i class="fa fa-chevron-left"></i></div>
      <div class="featured-control-right slider-control-right"><i class="fa fa-chevron-right"></i></div>
    </div> *}

    {include file="catalog/_partials/productlist.tpl" products=$products cssClass="swiper-wrapper row" itemCssClass="swiper-slide"}
  </div>
  <div class="row">
    <a class="all-product-link btn btn--tertiary text-center h4" href="{$allProductsLink}">
      <span>{l s='All products' d='Shop.Theme.Catalog'}</span>
      <i class="material-icons btn_icon">&#xe315;</i>
    </a>
  </div>
</section>
