{* <div class="container">
  <div class="row">
    {block name='hook_footer_before'}
      {hook h='displayFooterBefore'}
    {/block}
  </div>
</div> *}
<div class="footer-appbar d-flex d-md-none align-items-flex-end">
  <div id="home-icon" class="d-flex flex-column justify-content-center align-items-center 
    {if $urls.current_url === $urls.pages.index}active{/if}">
    <i class="fa fa-home fa-lg fa-fw"></i>
    <
  </div>
  <div id="_mobile_cart"></div>
  <div id="_mobile_user_info"></div>
</div>
<div class="footer-main">
  <div class="container">
    <div class="row">
      {block name='hook_footer'}
        {hook h='displayFooter'}
      {/block}
    </div>
    <div class="row">
      {block name='hook_footer_after'}
        {hook h='displayFooterAfter'}
      {/block}
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="text-sm-center">
          {block name='copyright_link'}
            <a class="_blank" target="_blank" rel="nofollow">
              {l s='%copyright% %year% - Ecommerce software by %company%' sprintf=['%company%' => $shop.name, '%year%' => 'Y'|date, '%copyright%' => '©'] d='Shop.Theme.Global'}
            </a>
          {/block}
        </p>
      </div>
    </div>
  </div>
</div>
