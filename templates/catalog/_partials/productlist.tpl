<div class="products{if !empty($cssClass)} {$cssClass}{/if}" itemscope data-products="{count($products)}" itemtype="http://schema.org/ItemList">
    {foreach from=$products item="product" key="position"}
        {if !empty($itemCssClass)}
            {include file="catalog/_partials/miniatures/product.tpl" product=$product pCssClass=$itemCssClass position=$position}
        {else}
            {include file="catalog/_partials/miniatures/product.tpl" product=$product position=$position}
        {/if}
    {/foreach}
</div>