
<div class="contact-rich">
  <h4>{l s='Store Information' d='Shop.Theme.Global'}</h4>
  <div class="block">
    <div class="icon"><i class="fa fa-location-arrow"></i></div>
    <div class="data">{$contact_infos.address.formatted nofilter}</div>
  </div>
  {if $contact_infos.phone}
    <hr/>
    <div class="block">
      <div class="icon"><i class="fa fa-phone fa-flip-horizontal"></i></div>
      <div class="data">
        {l s='Call us:' d='Shop.Theme.Global'}<br/>
        <a href="tel:{$contact_infos.phone}">{$contact_infos.phone}</a>
       </div>
    </div>
  {/if}
  {if $contact_infos.fax}
    <hr/>
    <div class="block">
      <div class="icon"><i class="fa fa-fax"></i></div>
      <div class="data">
        {l s='Fax:' d='Shop.Theme.Global'}<br/>
        {$contact_infos.fax}
      </div>
    </div>
  {/if}
  {if $contact_infos.email}
    <hr/>
    <div class="block">
      <div class="icon"><i class="fa fa-at"></i></div>
      <div class="data email">
        {l s='Email us:' d='Shop.Theme.Global'}<br/>
      </div>
      <a href="mailto:{$contact_infos.email}">{$contact_infos.email}</a>
    </div>
  {/if}
</div>
