{extends file=$layout}

{block name='content'}
  <section id="main">
    {block name='product_list_header'}
      <div class="row no-gutters border">
        <h2 id="js-product-list-header" class="category-list-header h2 flex-grow-1">{$listing.label}</h2>
      </div>
    {/block}

    {block name="subcategory_list"}
      <div class="row no-gutters">
        {json_encode($subcategories)}
        {if isset($subcategories) && $subcategories|@count > 0}
          {include file='catalog/_partials/subcategories.tpl' subcategories=$subcategories}
        {/if}
      </div>
    {/block}

    <section id="products">
      {if $listing.products|count}
        {block name='product_list_top'}
          <div id="js-product-list-top" class="row border-bottom products-selection pb-3">
            {include file='catalog/_partials/products-top.tpl' listing=$listing}
          </div>
        {/block}

        {block name='product_list_active_filters'}
          <div class="d-none d-md-block">
            {$listing.rendered_active_filters nofilter}
          </div>
        {/block}

        <div>
          {block name='product_list'}
            {include file='catalog/_partials/products.tpl' listing=$listing}
          {/block}
        </div>

        <div id="js-product-list-bottom" class="row no-gutters border-top">
          {block name='product_list_bottom'}
            {include file='catalog/_partials/products-bottom.tpl' listing=$listing}
          {/block}
        </div>

      {else}
        <div id="js-product-list-top"></div>

        {block name='product_list_empty'}
          <div id="js-product-list">
              {include file='errors/not-found.tpl'}
          </div>
        {/block}

        <div id="js-product-list-bottom"></div>
      {/if}
    </section>

  </section>
{/block}
