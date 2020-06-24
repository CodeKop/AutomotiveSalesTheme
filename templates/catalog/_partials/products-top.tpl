<div id="js-product-list-top" class="products-selection">
  <div class="col-md-6 d-none d-md-flex total-products">
    {* {if $listing.pagination.total_items > 1}
      <p>{l s='There are %product_count% products.' d='Shop.Theme.Catalog' sprintf=['%product_count%' => $listing.pagination.total_items]}</p>
    {elseif $listing.pagination.total_items > 0}
      <p>{l s='There is 1 product.' d='Shop.Theme.Catalog'}</p>
    {/if} *}
  </div>
  <div class="col-md-6">
    <div class="row sort-by-row">
      {block name='sort_by'}
        {include file='catalog/_partials/sort-orders.tpl' sort_orders=$listing.sort_orders}
      {/block}

      {if !empty($listing.rendered_facets)}
        <div class="col-sm-3 col-4 d-md-none filter-button">
          <button id="search_filter_toggler" class="btn btn-secondary">
            {l s='Filter' d='Shop.Theme.Actions'}
          </button>
        </div>
      {/if}
    </div>
  </div>
  <div class="col-sm-12 showing">
    {l s='Showing %from%-%to% of %total% item(s)' d='Shop.Theme.Catalog' sprintf=[
      '%from%' => $listing.pagination.items_shown_from,
      '%to%' => $listing.pagination.items_shown_to,
      '%total%' => $listing.pagination.total_items
    ]}
  </div>
</div>
