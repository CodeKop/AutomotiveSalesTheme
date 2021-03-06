<div id="_desktop_user_info">
  <div class="user-info d-none d-md-inline-flex flex-wrap">
    {if $logged}      
      {* If the user is logged in then show user name. *}
      <a
        class="account text-center d-none d-md-block"
        href="{$my_account_url}"
        title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <i class="fa fa-user-circle d-md-none w-100 logged"></i>
        <span class="w-100">{$customerName}</span>
        <i class="fa fa-checvron-down fa-xs"></i>
      </a>

      <div class="user-account-options">
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
      </div>
    {else}
      <a
        class="text-center text-dark"
        href="{$my_account_url}"
        title="{l s='Log or register to your customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <span>{l s='Login' d='Shop.Theme.Actions'}</span>
      </a>
      <p class="m-0 mx-2">/</p>
      <a
        class="text-center text-dark"
        href="{$urls.pages.register}"
        title="{l s='Log or register to your customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <span>{l s='Register' d='Shop.Theme.Actions'}</span>
      </a>
    {/if}
  </div>

  <a class="user-info mobile d-flex d-md-none text-center" href="{$my_account_url}"
      title="{l s='Log or register to your customer account' d='Shop.Theme.Customeraccount'}"
      rel="nofollow"
    >
    <i class="material-icons">&#xe853;</i>
  </a>
</div>
