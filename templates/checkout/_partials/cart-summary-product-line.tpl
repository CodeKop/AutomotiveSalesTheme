{block name='cart_summary_product_line'}
  <div class="media-left">
    <a href="{$product.url}" title="{$product.name}">
      <img class="media-object" src="{$product.cover.small.url}" alt="{$product.name}">
    </a>
  </div>
  <div class="media-body">
    <span class="product-name">{$product.name}</span>
    <span class="product-quantity">x{$product.quantity}</span>
    <span class="product-price float-right">{$product.price}</span>
    {hook h='displayProductPriceBlock' product=$product type="unit_price"}
    {foreach from=$product.attributes key="attribute" item="value"}
        <div class="product-line-info product-line-info-secondary text-muted">
            <span class="label">{$attribute}:</span>
            <span class="value">{$value}</span>
        </div>
    {/foreach}
    <br/>
  </div>
{/block}
