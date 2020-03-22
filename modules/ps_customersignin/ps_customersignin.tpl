<div id="_desktop_user_info">
  <div class="user-info">
    {if $logged}      
      {* If the user is logged in then show user name. *}
      <a
        class="account text-center d-none d-md-block"
        href="{$my_account_url}"
        title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <i class="material-icons d-md-none w-100 logged">&#xE7FF;</i>
        <span class="w-100">{$customerName}</span>
      </a>
      {* If the user is logged in the show the logout button. *}
      <a
        class="logout text-center d-none d-md-block text-muted w-100"
        href="{$logout_url}"
        rel="nofollow"
      >
        <span>{l s='Sign out' d='Shop.Theme.Actions'}</span>
        <i class="fa-sm fa fa-sign-out-alt align-center ml-1"></i>
      </a>
      {* If the user is logged and on mobile size, show this instead of others. *}
      <a
        class="account text-center d-block d-md-none"
        href="{$my_account_url}"
        title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <i class="fa-lg far fa-user-circle mx-2 my-3"></i>
        <span class="d-none d-md-block w-100">({$customerName})</span>
      </a>
    {else}
      <a
        class="text-center d-none d-md-flex flex-row bg-primary text-white rounded-pill shadow px-3 py-2 align-items-center"
        href="{$my_account_url}"
        title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <i class="fa-md mr-2 far fa-user-circle"></i>
        <span class="d-none d-md-block">{l s='Sign in' d='Shop.Theme.Actions'}</span>
      </a>
      <a
        class="account text-center d-block d-md-none"
        href="{$my_account_url}"
        title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <i class="fa-lg far fa-user-circle mx-2 my-3"></i>
        <span class="d-none d-md-block w-100">({$customerName})</span>
      </a>
    {/if}
  </div>
</div>
