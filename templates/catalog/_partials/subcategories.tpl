<div id="js-product-list-subcategories" class="row no-gutters">
    {foreach from=$subcategories item="sub"}
        <a href="{$sub.url}" class="category-subcategory col-4 col-sm-3 col-md-2 d-block" title={$sub.name}>
            <div class="sub-thumbnail">
                <img src="{$sub.image.small.url}" width="{$sub.image.small.width}" height="{$sub.image.small.height}" />
            </div>
            <div class="sub-info">
                <h4 class="sub-info-title" data-marquee>{$sub.name}</h4>
            </div>
    </div>
{/foreach}
</div>
