{extends file='customer/page.tpl'}

{block name='page_title'}
  {l s='Order history' d='Shop.Theme.Customeraccount'}
{/block}

{block name='page_content'}
  <h6>{l s='Here are the orders you\'ve placed since your account was created.' d='Shop.Theme.Customeraccount'}</h6>

  {if $orders}
    <table class="table table-striped table-bordered table-labeled d-none d-md-block">
      <thead class="thead-default">
        <tr>
          <th>{l s='Order reference' d='Shop.Theme.Checkout'}</th>
          <th>{l s='Date' d='Shop.Theme.Checkout'}</th>
          <th>{l s='Total price' d='Shop.Theme.Checkout'}</th>
          <th class="ud-md-none">{l s='Payment' d='Shop.Theme.Checkout'}</th>
          <th class="ud-md-none">{l s='Status' d='Shop.Theme.Checkout'}</th>
          <th>{l s='Invoice' d='Shop.Theme.Checkout'}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {foreach from=$orders item=order}
          <tr>
            <th scope="row">{$order.details.reference}</th>
            <td>{$order.details.order_date}</td>
            <td class="text-right">{$order.totals.total.value}</td>
            <td class="ud-md-none">{$order.details.payment}</td>
            <td>
              <span
                class="label label-pill {$order.history.current.contrast}"
                style="background-color:{$order.history.current.color}"
              >
                {$order.history.current.ostate_name}
              </span>
            </td>
            <td class="text-sm-center ud-md-none">
              {if $order.details.invoice_url}
                <a href="{$order.details.invoice_url}"><i class="material-icons">&#xE415;</i></a>
              {else}
                -
              {/if}
            </td>
            <td class="text-sm-center order-actions">
              <a href="{$order.details.details_url}" data-link-action="view-order-details">
                {l s='Details' d='Shop.Theme.Customeraccount'}
              </a>
              {if $order.details.reorder_url}
                <a href="{$order.details.reorder_url}">{l s='Reorder' d='Shop.Theme.Actions'}</a>
              {/if}
            </td>
          </tr>
        {/foreach}
      </tbody>
    </table>

    <div class="orders d-md-none">
      {foreach from=$orders item=order}
        <div class="order">
          <div class="row">
            <div class="col-10">
              <a href="{$order.details.details_url}"><h3>{$order.details.reference}</h3></a>
              <div class="date">{$order.details.order_date}</div>
              <div class="total">{$order.totals.total.value}</div>
              <div class="status">
                <span
                  class="label label-pill {$order.history.current.contrast}"
                  style="background-color:{$order.history.current.color}"
                >
                  {$order.history.current.ostate_name}
                </span>
              </div>
            </div>
            <div class="col-2 text-right">
                <div>
                  <a href="{$order.details.details_url}" data-link-action="view-order-details" title="{l s='Details' d='Shop.Theme.Customeraccount'}">
                    <i class="material-icons">&#xE8B6;</i>
                  </a>
                </div>
                {if $order.details.reorder_url}
                  <div>
                    <a href="{$order.details.reorder_url}" title="{l s='Reorder' d='Shop.Theme.Actions'}">
                      <i class="material-icons">&#xE863;</i>
                    </a>
                  </div>
                {/if}
            </div>
          </div>
        </div>
      {/foreach}
    </div>

  {/if}
{/block}
