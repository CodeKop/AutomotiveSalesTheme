{extends file=$layout}

{block name='category_header'}
  <h2 id="js-product-list-header" class="category-list-header flex-grow-1" class="h2">{$listing.label}</h2>
  
  {block name='product_list_top'}
    {include file='catalog/_partials/products-top.tpl' listing=$listing}
  {/block}
{/block}

{block name='content'}
  <section id="main">
    <section id="products">
      {if $listing.products|count}
        {block name='product_list_active_filters'}
          <div id="" class="d-none d-md-block">
            {$listing.rendered_active_filters nofilter}
          </div>
        {/block}

        <div>
          {block name='product_list'}
            {include file='catalog/_partials/products.tpl' listing=$listing}
          {/block}
        </div>

        <div id="js-product-list-bottom">
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
