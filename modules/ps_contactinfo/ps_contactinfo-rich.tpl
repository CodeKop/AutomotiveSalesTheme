<div class="contact-rich">
    <h4 class="h3">{l s='Store Information' d='Shop.Theme.Global'}</h4>
    <div class="block">
        <div class="icon"><i class="material-icons">&#xe569;</i></div>
        <div class="data">{$contact_infos.address.formatted nofilter}</div>
    </div>
    {if $contact_infos.phone}
        <div class="block">
            <div class="icon"><i class="material-icons">&#xe0b0;</i></div>
            <div class="data">
                {l s='Give us a Call' d='Shop.Theme.Global'}<br />
                <a href="tel:{$contact_infos.phone}">{$contact_infos.phone}</a>
            </div>
        </div>
    {/if}
    {if $contact_infos.fax}
        <div class="block">
            <div class="icon"><i class="material-icons">&#xe8ad;</i></div>
            <div class="data">
                {l s='Fax:' d='Shop.Theme.Global'}<br />
                {$contact_infos.fax}
            </div>
        </div>
    {/if}
    {if $contact_infos.email}
        <div class="block">
            <div class="icon"><i class="material-icons">&#xe0e6;</i></div>
            <div class="data">
                {l s='Email us:' d='Shop.Theme.Global'}<br />
                <a href="mailto:{$contact_infos.email}">{$contact_infos.email}</a>
            </div>
        </div>
    {/if}
</div>
