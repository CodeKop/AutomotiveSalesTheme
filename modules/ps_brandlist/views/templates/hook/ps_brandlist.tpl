{if $brands}
<div id="search-filters-brands" class="position-relative container-fluid">
  <div class="container">
    <div class="row no-gutters justify-content-center">
      <h1 class="h3 facet-header">
        {if $display_link_brand}<a href="{$page_link}" title="{l s='Brands' d='Shop.Theme.Catalog'}">{/if}
          {l s='We stock Top Quality Brands that suit Your Needs.' d='Shop.Theme.Catalog'}
        {if $display_link_brand}</a>{/if}
      </h1>
    </div>
    <div class="row no-gutters facets-scroll">
      {include file="module:ps_brandlist/views/templates/_partials/$brand_display_type.tpl" brands=$brands}
    </div>
  </div>
</div>
{/if}
