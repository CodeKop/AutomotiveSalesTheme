{extends file=$layout}

{block name='content'}
<section id="main" class="container">
    {block name='brand_header'}
    <div class="row justify-content-center page-header">
        <h1>{l s='Brands' d='Shop.Theme.Catalog'}</h1>
    </div>
    {/block}

    {block name='brand_miniature'}
    <ul class="row">
        {foreach from=$brands item=brand}
        {include file='catalog/_partials/miniatures/brand.tpl' brand=$brand}
        {/foreach}
    </ul>
    {/block}
</section>
{/block}
