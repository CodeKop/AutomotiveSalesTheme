<div id="js-product-list">
  {include file="catalog/_partials/productlist.tpl" products=$listing.products cssClass="row"}

  {block name='pagination'}
    {include file='_partials/pagination.tpl' pagination=$listing.pagination cssClas="row"}
  {/block}

  <div class="d-md-none text-right up">
    <a href="#header" class="btn btn-secondary">
      {l s='Back to top' d='Shop.Theme.Actions'}
      <i class="material-icons">&#xe316;</i>
    </a>
  </div>
</div>
