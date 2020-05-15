<div class="products swiper-wrapper row" itemscope data-products="{count($products)}" itemtype="http://schema.org/ItemList">
    {foreach from=$products item="product" key="position"}
        {include file="product.tpl" product=$product cssClass=$itemCssClass position=$position}
    {/foreach}
</div>