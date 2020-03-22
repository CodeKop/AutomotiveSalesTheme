{block name='header'}
  {block name='header_nav'}
    <nav class="header-nav">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-none d-md-block" id="_desktop_logo">
            <a href="{$urls.base_url}">
              <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name} {l s='logo' d='Shop.Theme.Global'}">
            </a>
          </div>
          <div class="col-md-6 text-right d-none d-md-block">
            {hook h='displayNav1'}
          </div>
          <div class="d-block d-md-none text-sm-center mobile w-100">
            {hook h='displayNav2'}
            <div class="float-left" id="menu-icon">
              <i class="material-icons">&#xE5D2;</i>
            </div>
            <div class="float-right" id="_mobile_cart"></div>
            <div class="float-right" id="_mobile_user_info"></div>
            <div class="top-logo" id="_mobile_logo"></div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </nav>
  {/block}

  {block name='header_top'}
    <div class="header-top d-md-none">
      <div class="container">
         <div class="row">
          <div class="col-sm-12">
            <div class="row">
              {hook h='displayTop'}
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div id="mobile_top_menu_wrapper" class="row d-md-none" style="display:none;">
          <div class="js-top-menu mobile" id="_mobile_top_menu"></div>
          <div class="js-top-menu-bottom">
            <div id="_mobile_currency_selector"></div>
            <div id="_mobile_language_selector"></div>
            <div id="_mobile_contact_link"></div>
          </div>
        </div>
      </div>
    </div>
    {hook h='displayNavFullWidth'}
  {/block}
{/block}
