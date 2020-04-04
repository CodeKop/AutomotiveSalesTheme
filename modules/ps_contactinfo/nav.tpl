<div id="_desktop_contact_link">
  <div class="contact-link main px-3 py-2 px-md-0 py-md-0">
    {if $contact_infos.phone}
      <div class="icon-container d-none d-md-block">
        <i class="fa fa-phone fa-flip-horizontal"></i>
      </div>

      <div class="content-container">
        <span class="caption">Call Us Now</span>
        <span class="value number-text">{$contact_infos.phone}</span>
      </div>
    {else}
      <div class="icon-container d-none d-md-block">
        <i class="fa fa-phone fa-flip-horizontal"></i>
      </div>

      <div class="content-container">
        <span>
          <a href="{$urls.pages.contact}">{l s='Contact us' d='Shop.Theme.Global'}</a>
        </span>
      </div>
    {/if}
  </div>
</div>
