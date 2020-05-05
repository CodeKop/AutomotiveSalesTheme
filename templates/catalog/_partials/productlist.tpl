<div class="products{if !empty($cssClass)} {$cssClass}{/if}" itemscope data-products="{count($products)}" itemtype="http://schema.org/ItemList">
    {foreach from=$products item="product" key="position"}
        {include file="catalog/_partials/miniatures/product.tpl" product=$product cssClass=$itemCssClass position=$position}
    {/foreach}
</div>