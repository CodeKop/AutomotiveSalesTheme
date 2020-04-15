<div class="search-filters-brands position-relative">
  {if $brands}
    <h1 class="h3 text-capitalise facet-header">
      {if $display_link_brand}<a href="{$page_link}" class="text-dark" title="{l s='Brands' d='Shop.Theme.Catalog'}">{/if}
        {l s='Our Brands' d='Shop.Theme.Catalog'}
      {if $display_link_brand}</a>{/if}
    </h1>
    {include file="module:ps_brandlist/views/templates/_partials/$brand_display_type.tpl" brands=$brands}
    <div class="directions" data-rclass="slider-controls">
      <div class="brand-direction-left" data-rclass="slider-control-left">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div class="brand-direction-right" data-rclass="slider-control-right">
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>
  {/if}
</div>
