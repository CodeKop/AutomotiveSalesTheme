
<div class="block_newsletter col-lg-8 col-md-12 col-sm-12" id="blockEmailSubscription_{$hookName}">
  <div class="row">
    <p id="block-newsletter-label" class="col-md-5 col-12">{l s='Get our latest news and special sales' d='Shop.Theme.Global'}</p>
    <div class="col-md-7 col-12">
      <form action="{$urls.current_url}#blockEmailSubscription_{$hookName}" method="post">
        <div class="row">
          <div class="col-12">
            <input
              class="btn btn-primary float-right ud-none"
              name="submitNewsletter"
              type="submit"
              value="{l s='Subscribe' d='Shop.Theme.Actions'}"
            >
            <input
              class="btn btn-primary float-right d-sm-none"
              name="submitNewsletter"
              type="submit"
              value="{l s='OK' d='Shop.Theme.Actions'}"
            >
            <div class="input-wrapper">
              <input
                name="email"
                type="email"
                value="{$value}"
                placeholder="{l s='Your email address' d='Shop.Forms.Labels'}"
                aria-labelledby="block-newsletter-label"
                required
              >
            </div>
            <input type="hidden" name="blockHookName" value="{$hookName}" />
            <input type="hidden" name="action" value="0">
            <div class="clearfix"></div>
          </div>
          <div class="col-12">
              {if $conditions}
                <p>{$conditions nofilter}</p>
              {/if}
              {if $msg}
                <p class="alert {if $nw_error}alert-danger{else}alert-success{/if}">
                  {$msg}
                </p>
              {/if}
              {if isset($id_module)}
                {hook h='displayGDPRConsent' id_module=$id_module}
              {/if}
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
