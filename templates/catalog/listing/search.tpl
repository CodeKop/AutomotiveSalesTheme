{*
 * This file allows you to customize your search page.
 * You can safely remove it if you want it to appear exactly like all other product listing pages
 *}
{extends file='catalog/listing/product-list.tpl'}

{block name='product_list_header'}{/block}

{block name='product_list_empty'}
    <div id="js-product-list">
        {include file='errors/no-results.tpl'}
    </div>
{/block}