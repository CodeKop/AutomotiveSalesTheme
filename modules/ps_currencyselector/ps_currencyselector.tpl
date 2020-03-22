
<div id="_desktop_currency_selector">
  <div class="currency-selector-wrapper px-3">
    <span id="currency-selector-label" class="small text-md-center d-md-block d-inline-block align-top">{l s='Currency' d='Shop.Theme.Global'}</span>
    <div class="currency-selector dropdown js-dropdown">
      <button data-target="#" data-toggle="dropdown" class="d-none d-md-block btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="{l s='Currency dropdown' d='Shop.Theme.Global'}">
        <span class="expand-more _gray-darker">{$current_currency.iso_code} {$current_currency.sign}</span>
        {* <i class="material-icons expand-more">&#xE313;</i> *}
        <i  class="ml-1 fa fa-xs fa-chevron-down"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="currency-selector-label">
        {foreach from=$currencies item=currency}
          <li {if $currency.current} class="current" {/if}>
            <a title="{$currency.name}" rel="nofollow" href="{$currency.url}" class="dropdown-item">{$currency.iso_code} {$currency.sign}</a>
          </li>
        {/foreach}
      </ul>
      <select class="link d-md-none" aria-labelledby="currency-selector-label">
        {foreach from=$currencies item=currency}
          <option value="{$currency.url}"{if $currency.current} selected="selected"{/if}>{$currency.iso_code} {$currency.sign}</option>
        {/foreach}
      </select>
    </div>
  </div>
</div>
