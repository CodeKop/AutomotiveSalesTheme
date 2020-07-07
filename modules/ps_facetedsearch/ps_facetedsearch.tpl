{if isset($listing.rendered_facets)}
<div id="search_filters_wrapper" class="d-none d-md-block row">
  <div id="search_filter_controls" class="d-md-none">
      <span id="_mobile_search_filters_clear_all"></span>
      <button class="btn btn-secondary ok">
        <i class="fa fa-check rtl-no-flip"></i>
        {l s='OK' d='Shop.Theme.Actions'}
      </button>
  </div>
  {$listing.rendered_facets nofilter}
</div>
{/if}
