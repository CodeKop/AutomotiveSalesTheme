{block name='header_banner'}
  <div class="header-banner">
    {hook h='displayBanner'}
  </div>
{/block}

{block name='header_top'}
  <div class="header-top py-2">
    <div class="container-fluid">
      <div class="d-md-none d-flex align-items-center text-sm-center mobile">
        <div id="menu-icon">
          <i class="material-icons">&#xe5d2;</i>
        </div>
        <div class="flex-grow-1 top-logo" id="_mobile_logo"></div>
        <div id="_mobile_user_info"></div>
      </div>

       <div class="row align-items-center d-none d-md-flex flex-nowrap">
          <div class="col-3 d-flex align-items-center nav-left">
            {hook h='displayNav1'}
          </div>
          <div class="col-6" id="_desktop_logo">
            <a href="{$urls.base_url}" class="d-block">
              <img class="logo w-100" src="{$shop.logo}" alt="{$shop.name}">
            </a>
          </div>
          <div class="col-3 d-flex flex-row-reverse align-items-center nav-right">
            {hook h='displayNav2'}
          </div>
      </div>
    </div>
  </div>
  {hook h='displayNavFullWidth'}
{/block}

{block name='header_nav'}
  <nav class="header-nav m-0">
    <div class="container-fluid">
      <div class="row d-none d-md-flex position-relative">
        <div class="col-auto flex-grow-1 d-flex align-items-end nav-left">
          {hook h='displayBar1'}
        </div>
        <div class="col-auto d-flex flex-row-reverse align-items-center nav-right">
          {hook h='displayBar2'}
        </div>
      </div>

      <div class="row d-block d-md-none mobile">
        {hook h='displaySearch'}
      </div>
      <div id="mobile_top_menu_wrapper" class="row d-none d-md-none flex-column">
        <div class="js-top-menu mobile border px-0 py-3 mb-3" id="_mobile_top_menu"></div>
        <div class="js-top-menu-bottom">
          <div id="_mobile_currency_selector"></div>
          <div id="_mobile_language_selector"></div>
          <div id="_mobile_contact_link"></div>
        </div>
      </div
    </div>
  </nav>
{/block}