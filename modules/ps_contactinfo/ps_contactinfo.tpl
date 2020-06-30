<div class="block-contact col-md-3 links wrapper py-md-3">
  <div class="d-none d-md-block">
    <div class="block-contact-title">
      <p class="h3 text-uppercase block-contact-title">{l s='Store information' d='Shop.Theme.Global'}</p>
    </div>
    <div class="block-contact-content">
      {$contact_infos.address.formatted nofilter}
      {if $contact_infos.phone}
        <br>
        {* [1][/1] is for a HTML tag. *}
        {l s='Call us: [1]%phone%[/1]'
          sprintf=[
          '[1]' => '<span>',
          '[/1]' => '</span>',
          '%phone%' => $contact_infos.phone
          ]
          d='Shop.Theme.Global'
        }
      {/if}
      {if $contact_infos.fax}
        <br>
        {* [1][/1] is for a HTML tag. *}
        {l
          s='Fax: [1]%fax%[/1]'
          sprintf=[
            '[1]' => '<span>',
            '[/1]' => '</span>',
            '%fax%' => $contact_infos.fax
          ]
          d='Shop.Theme.Global'
        }
      {/if}
      {if $contact_infos.email}
        <br>
        {* [1][/1] is for a HTML tag. *}
        {l
          s='Email us: [1]%email%[/1]'
          sprintf=[
            '[1]' => '<a href="mailto:'|cat:$contact_infos.email|cat:'" class="dropdown">',
            '[/1]' => '</a>',
            '%email%' => $contact_infos.email
          ]
          d='Shop.Theme.Global'
        }
      {/if}
    </div>
  </div>
  <div class="d-none d-md-block">
    <div class="title mt-4 text-center">
      <a class="h6 d-inline-block bg-primary text-white px-3 py-2 shadow-lg rounded"
        href="{$urls.pages.stores}">{l s='View our Stores' d='Shop.Theme.Global'}</a>
    </div>
  </div>
</div>
