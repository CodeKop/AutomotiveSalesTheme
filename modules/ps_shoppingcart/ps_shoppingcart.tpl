<div id="_desktop_cart">
  <a href="{$cart_url}" data-refresh-url="{$refresh_url}"
    class="blockcart main cart-preview {if $cart.products_count > 0}active{else}inactive{/if}">
    <div class="icon-container">
      <i class="fa-lg fa fa-shopping-basket mx-2 my-3"></i>
    </div>

    <div class="d-none d-md-block content-container">
      <span class="caption">Cart <{$cart.products_count}></span>
      <span class="value number-text">{$cart.subtotals.products.value}</span>
    </div>
  </a>
</div>
