{if $page.admin_notifications}
  <div class="alert alert-warning row" role="alert">
    <div class="container">
      <div class="row">
        {foreach $page.admin_notifications as $notif}
          <div class="col-sm-12">
            <i class="fa fa-exclamation-circle float-left"></i>
            <p class="alert-text">{$notif.message}</p>
          </div>
        {/foreach}
      </div>
    </div>
  </div>
{/if}
