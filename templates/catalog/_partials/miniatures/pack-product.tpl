{block name='pack_miniature_item'}
  <article>
    <div class="card">
      <div class="pack-product-container">
        <div class="thumb-mask">
          <div class="mask">
            <a href="{$product.url}" title="{$product.name}">
              <img
                src="{$product.cover.medium.url}"
                alt="{$product.cover.legend}"
                data-full-size-image-url="{$product.cover.large.url}"
              >
            </a>
          </div>
        </div>

        <div class="pack-product-name">
          <a href="{$product.url}" title="{$product.name}">
            {$product.name}
          </a>
        </div>

        {if $showPackProductsPrice} 
          <div class="pack-product-price">
            <strong>{$product.price}</strong>
          </div>
        {/if}
        
        <div class="pack-product-quantity">
          <span>x {$product.pack_quantity}</span>
        </div>
      </div>
    </div>
  </article>
{/block}
