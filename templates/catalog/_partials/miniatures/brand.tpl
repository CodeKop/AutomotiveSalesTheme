{block name='brand_miniature_item'}
    <div class="brand-item col-md-3">
        <div>
            <a href="{$brand.url}" class="brand-img"><img src="{$brand.image}" alt="{$brand.name}"></a>
            <div class="brand-heading">
                {$brand.name}
                {$brand.text nofilter}
            </div>
            <div class="brand-products">
                <p class="product-count">{$brand.nb_products}</p>
                <a href="{$brand.url}">{l s='View products' d='Shop.Theme.Actions'}</a>
            </div>
        </div>
    </div>
{/block}
