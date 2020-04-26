<div id="_desktop_cart" class="shopping-cart">
  <a href="{$cart_url}" data-refresh-url="{$refresh_url}"
    class="blockcart main cart-preview {if $cart.products_count > 0}active{else}inactive{/if}">
    <i class="material-icons">&#xe8cb;</i>
    <span class="value number-text">{$cart.subtotals.products.value}</span>
    {if $cart.products_count > 0}<span class="amount">{$cart.products_count}</span>{/if}
  </a>
</div>
