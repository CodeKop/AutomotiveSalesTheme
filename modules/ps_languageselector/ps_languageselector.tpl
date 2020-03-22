<div id="_desktop_language_selector">
  <div class="language-selector-wrapper px-3">
    <span id="language-selector-label" class="small text-md-center d-md-block d-inline-block align-top">{l s='Language' d='Shop.Theme.Global'}</span>
    <div class="language-selector dropdown js-dropdown">
      <button data-toggle="dropdown" class="d-none d-md-block btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="{l s='Language dropdown' d='Shop.Theme.Global'}">
        <span class="expand-more">{$current_language.name_simple}</span>
        <i class="ml-1 fa fa-xs fa-chevron-down"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="language-selector-label">
        {foreach from=$languages item=language}
          <li {if $language.id_lang == $current_language.id_lang} class="current" {/if}>
            <a href="{url entity='language' id=$language.id_lang}" class="dropdown-item" data-iso-code="{$language.iso_code}">{$language.name_simple}</a>
          </li>
        {/foreach}
      </ul>
      <select class="link d-md-none" aria-labelledby="language-selector-label">
        {foreach from=$languages item=language}
          <option value="{url entity='language' id=$language.id_lang}"{if $language.id_lang == $current_language.id_lang} selected="selected"{/if} data-iso-code="{$language.iso_code}">
            {$language.name_simple}
          </option>
        {/foreach}
      </select>
    </div>
  </div>
</div>
