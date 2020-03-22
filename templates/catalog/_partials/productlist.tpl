<div class="products slider{if !empty($cssClass)} {$cssClass}{/if}" itemscope data-products="{count($products)}" itemtype="http://schema.org/ItemList">
    {foreach from=$products item="product" key="position"}
        {include file="catalog/_partials/miniatures/product.tpl" product=$product position=$position}
    {/foreach}
</div>