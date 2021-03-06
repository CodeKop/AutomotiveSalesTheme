<section id="js-active-search-filters" class="{if $activeFilters|count}active_filters{else}d-none{/if}">
  {if $activeFilters|count}
    {block name='active_filters_title'}
      <h1 class="h6 {if $activeFilters|count}active-filter-title{else}d-none{/if}">{l s='Active filters' d='Shop.Theme.Global'}</h1>
    {/block}

    <ul>
      {foreach from=$activeFilters item="filter"}
        {block name='active_filters_item'}
          <li class="filter-block">
            {l s='%1$s: ' d='Shop.Theme.Catalog' sprintf=[$filter.facetLabel]}
            {$filter.label}
            <a class="js-search-link" href="{$filter.nextEncodedFacetsURL}"><i class="fa fa-times close"></i></a>
          </li>
        {/block}
      {/foreach}
    </ul>
  {/if}
</section>
