<section class="featured-products position-relative mb-4 clearfix">
  <h2 class="h2 products-section-title text-uppercase text-md-left text-center">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <div class="featured-products-list swiper-container position-relative">
    <a class="swiper-button-prev" href="#prodcarousel" role="button" data-slide="prev">
      <span class="swiper-button-prev-icon" aria-hidden="true"><i class="material-icons">&#xe314;</i></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="swiper-button-next" href="#prodcarousel" role="button" data-slide="next">
      <span class="swiper-button-next-icon" aria-hidden="true"><i class="material-icons">&#xe315;</i></span>
      <span class="sr-only">Next</span>
    </a>

    {* <div class="featured-controls slider-controls">
      <div class="featured-control-left slider-control-left"><i class="fa fa-chevron-left"></i></div>
      <div class="featured-control-right slider-control-right"><i class="fa fa-chevron-right"></i></div>
    </div> *}

    {include file="productlist.tpl" products=$products}
  </div>
  <div class="row">
    <a class="all-product-link text-center h6" href="{$allProductsLink}">
      <span>{l s='All products' d='Shop.Theme.Catalog'}</span>
      <i class="material-icons btn_icon">&#xe315;</i>
    </a>
  </div>
</section>
