{extends file="errors/not-found.tpl"}

{block name='error_title'}
    <h1 class="page-title" title="Crying Face">Oh No!</h1>
{/block}

{block name='error_subtitle'}
    <div class="page-subtitle">
    <p>{l s='We couldn\'t  find what you were looking for' d='Shop.Theme.Global'}<span title="Crying Face">(&boxhd;^&boxhd;)</span></p>
    <p>
        {l s='Please try to ' d='Shop.Theme.Global'}
        <a href="#" class="font-weight-bold">{l s='search' d='Shop.Theme.Global'}</a>
        {l s=' again, or go to our ' d='Shop.Theme.Global'}
        <a href="{$urls.pages.index}" class="font-weight-bold">{l s='home page' d='Shop.Theme.Global'}</a>
        {l s=' and find something new to look for.' d='Shop.Theme.Global'}
    </p>
    </div>
{/block}
