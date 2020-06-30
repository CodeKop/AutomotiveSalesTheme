<div id="block_myaccount_infos" class="col-md-3 links wrapper border-right py-md-3">
  <p class="h3 myaccount-title d-none d-md-block">
    <a class="text-uppercase" href="{$urls.pages.my_account}" rel="nofollow">
      {l s='Your account' d='Shop.Theme.Customeraccount'}
    </a>
  </p>
  <div class="title clearfix d-md-none" data-target="#footer_account_list" data-toggle="collapse">
    <span class="h3">{l s='Your account' d='Shop.Theme.Customeraccount'}</span>
    <span class="float-right">
      <span class="navbar-toggler collapse-icons">
        <i class="fa fa-chevron-down add"></i>
        <i class="fa fa-chevron-up remove"></i>
      </span>
    </span>
  </div>
  <ul class="account-list collapse" id="footer_account_list">
    {foreach from=$my_account_urls item=my_account_url}
        <li>
          <a href="{$my_account_url.url}" title="{$my_account_url.title}" rel="nofollow">
            {$my_account_url.title}
          </a>
        </li>
    {/foreach}
    {hook h='displayMyAccountBlock'}
	</ul>
</div>
