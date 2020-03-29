
<div class="suppliers-sort dropdown">
  <button
    class="btn-unstyle select-title"
    rel="nofollow"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false">
    {l s='All suppliers' d='Shop.Theme.Catalog'}
    <i class="fa fa-chevron-down float-right"></i>
  </button>
  <div class="dropdown-menu">
    {foreach from=$suppliers item=supplier}
      <a
        rel="nofollow"
        href="{$supplier['link']}"
        class="select-list js-search-link"
      >
        {$supplier['name']}
      </a>
    {/foreach}
  </div>
</div>
