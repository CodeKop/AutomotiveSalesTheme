{block name='address_block_item'}
  <article id="address-{$address.id}" class="address" data-id-address="{$address.id}">
    <div class="address-body">
      <h4>{$address.alias}</h4>
      <address>{$address.formatted nofilter}</address>
    </div>

    {block name='address_block_item_actions'}
      <div class="address-footer">
        <a href="{url entity=address id=$address.id}" data-link-action="edit-address" class="btn btn-primary">
          <i class="material-icons">&#xE254;</i>
          <span>{l s='Update' d='Shop.Theme.Actions'}</span>
        </a>
        <a href="{url entity=address id=$address.id params=['delete' => 1, 'token' => $token]}" data-link-action="delete-address" class="btn btn-secondary">
          <i class="material-icons">&#xE872;</i>
          <span>{l s='Delete' d='Shop.Theme.Actions'}</span>
        </a>
      </div>
    {/block}
  </article>
{/block}
