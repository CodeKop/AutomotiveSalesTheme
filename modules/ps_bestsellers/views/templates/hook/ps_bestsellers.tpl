<section class="featured-products clearfix mt-3">
  <h2 class="h2 products-section-title text-uppercase">
    {l s='Best Sellers' d='Shop.Theme.Catalog'}
  </h2>
  {include file="catalog/_partials/productlist.tpl" products=$products}
  <a class="all-product-link float-left float-md-right h4" href="{$allBestSellers}">
    {l s='All best sellers' d='Shop.Theme.Catalog'}
    <i class="fa fa-chevron-right"></i>
  </a>
</section>
