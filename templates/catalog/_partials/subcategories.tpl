<div id="js-product-subcategories">
    {foreach from=$subcategories item="sub"}
      <div class="category-subcategory col-6 col-sm-4" title={$sub.name}>
        <div class="sub-thumbnail">
          <img src="{$sub.image.small.url}" height="{$sub.image.small.height}" />
        </div>
        <div class="sub-info">
          <h4 class="sub-info-title" data-marquee>{$sub.name}</h4>
        </div>
      </div>
    {/foreach}}
</div>
