{if $brands}
<div id="search-filters-brands" class="position-relative container">
    <h1 class="h3 text-capitalise facet-header">
      {if $display_link_brand}<a href="{$page_link}" class="text-dark" title="{l s='Brands' d='Shop.Theme.Catalog'}">{/if}
        {l s='Our Brands' d='Shop.Theme.Catalog'}
      {if $display_link_brand}</a>{/if}
    </h1>
    {include file="module:ps_brandlist/views/templates/_partials/$brand_display_type.tpl" brands=$brands}
</div>
{/if}
