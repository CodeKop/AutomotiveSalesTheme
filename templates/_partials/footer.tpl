{* <div class="container">
  <div class="row">
    {block name='hook_footer_before'}
      {hook h='displayFooterBefore'}
    {/block}
  </div>
</div> *}

<div class="footer-main">
  <div class="container-fluid">
    <div class="container">
      <div class="row border-left">
        {block name='hook_footer'}
          {hook h='displayFooter'}
        {/block}
      </div>
      <div class="row">
        {block name='hook_footer_after'}
          {hook h='displayFooterAfter'}
        {/block}
      </div>
    </div>
    <div class="row border-top">
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
