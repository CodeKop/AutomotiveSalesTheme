<section class="featured-products position-relative mb-4 clearfix container">
  <h2 class="h2 products-section-title text-uppercase text-md-left text-center">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <div class="featured-products-list carousel slide position-relative">
    <a class="carousel-control-prev" href="#prodcarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"><i class="material-icons">&#xe314;</i></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#prodcarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"><i class="material-icons">&#xe315;</i></span>
      <span class="sr-only">Next</span>
    </a>

    {* <div class="featured-controls slider-controls">
      <div class="featured-control-left slider-control-left"><i class="fa fa-chevron-left"></i></div>
      <div class="featured-control-right slider-control-right"><i class="fa fa-chevron-right"></i></div>
    </div> *}

    {include file="catalog/_partials/productlist.tpl" products=$products cssClass="carousel-inner row" itemCssClass="carousel-item"}
  </div>
  <div class="row">
    <a class="all-product-link btn btn--tertiary text-center h4" href="{$allProductsLink}">
      <span>{l s='All products' d='Shop.Theme.Catalog'}</span>
      <i class="material-icons btn_icon">&#xe315;</i>
    </a>
  </div>
</section>
