{block name='brand_miniature_item'}
    <div class="brand-item col-md-3">
        <div>
            <div class="brand-img"><a href="{$brand.url}"><img src="{$brand.image}" alt="{$brand.name}"></a></div>
            <div class="brand-infos">
                <p><a href="{$brand.url}">{$brand.name}</a></p>
                {$brand.text nofilter}
            </div>
            <div class="brand-products">
                <a href="{$brand.url}">{$brand.nb_products}</a>
                <a href="{$brand.url}">{l s='View products' d='Shop.Theme.Actions'}</a>
            </div>
        </div>
    </div>
{/block}
