{extends file='page.tpl'}

{block name='page_title'}
  {l s='Our stores' d='Shop.Theme.Global'}
{/block}

{block name='page_content_container'}
  <section id="content" class="page-content page-stores">

    {if count($stores) > 1}
      {foreach $stores as $store}
        <article id="store-{$store.id}" class="store-item card rounded mb-2 border-0">
          <div class="store-item-container clearfix">
            <div class="col-md-3 store-picture d-none d-md-inline-block">
              <img src="{$store.image.bySize.stores_default.url}" alt="{$store.image.legend}" title="{$store.image.legend}">
            </div>
            <div class="col-md-5 col-sm-7 col-12 store-description">
              <p class="h3 card-title">{$store.name}</p>
              <address>{$store.address.formatted nofilter}</address>
              {if $store.note || $store.phone || $store.fax || $store.email}
                <a data-toggle="collapse" href="#about-{$store.id}" aria-expanded="false" aria-controls="about-{$store.id}"><strong>{l s='About and Contact' d='Shop.Theme.Global'}</strong><i class="fa fa-chevron-right"></i></a>
              {/if}
            </div>
            <div class="col-md-4 col-sm-5 col-12 divide-left">
              <table class="mx-md-auto">
                {foreach $store.business_hours as $day}
                <tr>
                  <th>{$day.day|truncate:4:'.'}</th>
                  <td>
                    <ul>
                    {foreach $day.hours as $h}
                      <li>{$h}</li>
                    {/foreach}
                    </ul>
                  </td>
                </tr>
                {/foreach}
              </table>
            </div>
          </div>
          <footer id="about-{$store.id}" class="collapse">
            <div class="store-item-footer divide-top">
              {if $store.note}
                <div class="card-block">
                  <p class="text-justify">{$store.note}</p>
                </div>
              {/if}
              <ul class="card-block">
                {if $store.phone}
                  <li><i class="fa fa-phone fa-flip-horizontal">&#xE0B0;</i>{$store.phone}</li>
                {/if}
                {if $store.fax}
                  <li><i class="fa fa-fax">&#xE8AD;</i>{$store.fax}</li>
                {/if}
                {if $store.email}
                  <li><i class="fa fa-envelope"></i>{$store.email}</li>
                {/if}
              </ul>
            </div>
          </footer>
        </article>
      {/foreach}
    {else}
      <script>window.location.replace({$urls.pages.contact});</script>
    {/if}

  </section>
{/block}
