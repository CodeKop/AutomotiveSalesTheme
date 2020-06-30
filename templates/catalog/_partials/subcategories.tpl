<div id="js-product-list-subcategories" class="row">
    {foreach from=$subcategories item="sub"}
      <div class="category-subcategory col-4 col-sm-3 col-md-2" title={$sub.name}>
        <div class="sub-thumbnail">
          <img src="{$sub.image.small.url}" width="{$sub.image.small.width" height="{$sub.image.small.height}" />
        </div>
        <div class="sub-info">
          <h4 class="sub-info-title" data-marquee>{$sub.name}</h4>
        </div>
      </div>
    {/foreach}
</div>
