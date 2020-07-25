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
                <a href="{$brand.url}" class="product-link">
                  <i class="material-icons">&#xe8f4;</i>
                  <span>{l s='View products' d='Shop.Theme.Actions'}</span>
                </a>
            </div>
        </div>
    </div>
{/block}
