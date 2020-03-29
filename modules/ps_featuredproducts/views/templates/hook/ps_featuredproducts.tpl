<section class="featured-products position-relative mb-4 clearfix">
  <h2 class="h2 products-section-title text-uppercase text-md-left text-center">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <div class="featured-products-list position-relative">
    <div class="featured-controls slider-controls">
      <div class="featured-control-left slider-control-left"><i class="fa fa-chevron-left"></i></div>
      <div class="featured-control-right slider-control-right"><i class="fa fa-chevron-right"></i></div>
    </div>

    {include file="catalog/_partials/productlist.tpl" products=$products cssClass="row"}
  </div>
  <a class="all-product-link float-left float-md-right h4" href="{$allProductsLink}">
    {l s='All products' d='Shop.Theme.Catalog'}<i class="fa fa-chevron-right"></i>
  </a>
</section>
