
<div id="search_filters_brands">
  {if $brands}
    <h1 class="h6 text-uppercase facet-header">
      {if $display_link_brand}<a href="{$page_link}" title="{l s='Brands' d='Shop.Theme.Catalog'}">{/if}
        {l s='Our Brands' d='Shop.Theme.Catalog'}
      {if $display_link_brand}</a>{/if}
    </h1>
    {include file="module:ps_brandlist/views/templates/_partials/$brand_display_type.tpl" brands=$brands}
    <div class="directions slider-controls">
      <div class="brand-direction-left slider-control-left">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div class="brand-direction-right slider-control-right">
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>
  {/if}
</div>
