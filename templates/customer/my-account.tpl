{extends file='customer/page.tpl'}

{block name='page_title'}
  {l s='Your account' d='Shop.Theme.Customeraccount'}
{/block}

{block name='page_content'}
  <div class="row">
    <div class="links">

      <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="identity-link" href="{$urls.pages.identity}">
        <span class="link-item">
          <i class="fa fa-user-circle"></i>
          {l s='Information' d='Shop.Theme.Customeraccount'}
        </span>
      </a>

      {if $customer.addresses|count}
        <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="addresses-link" href="{$urls.pages.addresses}">
          <span class="link-item">
            <i class="fa fa-address-card"></i>
            {l s='Addresses' d='Shop.Theme.Customeraccount'}
          </span>
        </a>
      {else}
        <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="address-link" href="{$urls.pages.address}">
          <span class="link-item">
            <i class="fa fa-thumbtack"></i>
            {l s='Add first address' d='Shop.Theme.Customeraccount'}
          </span>
        </a>
      {/if}

      {if !$configuration.is_catalog}
        <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="history-link" href="{$urls.pages.history}">
          <span class="link-item">
            <i class="fa fa-calendar-alt"></i>
            {l s='Order history and details' d='Shop.Theme.Customeraccount'}
          </span>
        </a>
      {/if}

      {if !$configuration.is_catalog}
        <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="order-slips-link" href="{$urls.pages.order_slip}">
          <span class="link-item">
            <i class="fa fa-receipt"></i>
            {l s='Credit slips' d='Shop.Theme.Customeraccount'}
          </span>
        </a>
      {/if}

      {if $configuration.voucher_enabled && !$configuration.is_catalog}
        <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="discounts-link" href="{$urls.pages.discount}">
          <span class="link-item">
            <i class="fa fa-tag"></i>
            {l s='Vouchers' d='Shop.Theme.Customeraccount'}
          </span>
        </a>
      {/if}

      {if $configuration.return_enabled && !$configuration.is_catalog}
        <a class="col-lg-4 col-md-6 col-sm-6 col-12" id="returns-link" href="{$urls.pages.order_follow}">
          <span class="link-item">
            <i class="fa fa-box"></i>
            {l s='Merchandise returns' d='Shop.Theme.Customeraccount'}
          </span>
        </a>
      {/if}

      {block name='display_customer_account'}
        {hook h='displayCustomerAccount'}
      {/block}

    </div>
  </div>
{/block}


{block name='page_footer'}
  {block name='my_account_links'}
    <div class="text-sm-center">
      <a href="{$logout_url}" >
        {l s='Sign out' d='Shop.Theme.Actions'}
      </a>
    </div>
  {/block}
{/block}
