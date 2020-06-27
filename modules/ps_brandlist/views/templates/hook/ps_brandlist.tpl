{if $brands}
<div id="search-filters-brands" class="position-relative container-fluid border-bottom">
  <div class="container border-left border-right py-3">
    <h1 class="h3 text-center facet-header">
      {if $display_link_brand}<a href="{$page_link}" class="text-dark" title="{l s='Brands' d='Shop.Theme.Catalog'}">{/if}
        {l s='We stock Top Quality Brands that suit Your Needs.' d='Shop.Theme.Catalog'}
      {if $display_link_brand}</a>{/if}
    </h1>
    {include file="module:ps_brandlist/views/templates/_partials/$brand_display_type.tpl" brands=$brands}
  </div>
</div>
{/if}
