<div id="js-product-list-top" class="row products-selection align-items-center">
    <div class="col-12 col-md-6 showing">
        {l s='Showing %from%-%to% of %total% item(s)' d='Shop.Theme.Catalog' sprintf=[
        '%from%' => $listing.pagination.items_shown_from,
        '%to%' => $listing.pagination.items_shown_to,
        '%total%' => $listing.pagination.total_items
        ]}
    </div>
    <div class="col-12 col-md-6 product-sort-col row no-gutters">
        {block name='sort_by'}
            <div class="{if !empty($listing.rendered_facets)}col-8 col-sm-9{else}col-12{/if} col-md-12 products-sort-order dropdown">
                {include file='catalog/_partials/sort-orders.tpl' sort_orders=$listing.sort_orders}
            </div>
        {/block}

        {if !empty($listing.rendered_facets)}
        <div class="col-4 col-sm-3 d-md-none filter-button">
            <button id="search_filter_toggler" class="btn btn-secondary">
                {l s='Filter' d='Shop.Theme.Actions'}
            </button>
        </div>
        {/if}
    </div>
</div>
