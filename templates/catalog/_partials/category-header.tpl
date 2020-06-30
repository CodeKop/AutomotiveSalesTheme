<div id="js-product-list-header" class="row no-gutters">
    {if $listing.pagination.items_shown_from == 1}
        {if $category.image.large.url}
            <div class="category-cover mr-3">
                <img src="{$category.image.large.url}" alt="{if !empty($category.image.legend)}{$category.image.legend}{else}{$category.name}{/if}">
            </div>
        {/if}
        <div class="block-category-inner">
            <h1 class="h1">{$category.name}</h1>
            {if $category.description}
                <div id="category-description" class="text-muted">{$category.description nofilter}</div>
            {/if}
        </div>
    {/if}
</div>
