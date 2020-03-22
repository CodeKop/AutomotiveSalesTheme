<div id="_desktop_contact_link">
  <div class="contact-link main">
    {if $contact_infos.phone}
      <div class="icon-container">
        <i class="material-icons">phone</i>
      </div>

      <div class="content-container">
        <span class="caption">Call Us Now</span>
        <span class="value number-text">{$contact_infos.phone}</span>
      </div>
    {else}
      <div class="icon-container">
        <i class="material-icons">account_circle</i>
      </div>

      <div class="content-container">
        <span>
          <a href="{$urls.pages.contact}">{l s='Contact us' d='Shop.Theme.Global'}</a>
        </span>
      </div>
    {/if}
  </div>
</div>
