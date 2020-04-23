{block name='header_banner'}
  <div class="header-banner">
    {hook h='displayBanner'}
  </div>
{/block}

{block name='header_top'}
  <div class="header-top">
    <div class="container-fluid">
      <div class="d-md-none d-flex align-items-center text-sm-center mobile">
        <div id="menu-icon">
          <i class="fa fa-bars fa-lg fa-fw"></i>
        </div>
        <div class="flex-grow-1 top-logo my-1" id="_mobile_logo"></div>
        <div id="menu-icon">
          <i class="fa fa-blank fa-lg fa-fw"></i>
        </div>
        {* <div id="_mobile_cart"></div> *}
      </div>

       <div class="row no-gutters align-items-center">
        <div class="d-none d-md-flex col-md-4 col-sm-12">
          {hook h='displayNav1'}
        </div>
        <div class="col-md-12 d-none d-md-block" id="_desktop_logo">
          <a href="{$urls.base_url}" class="d-block">
            <img class="logo w-100" src="{$shop.logo}" alt="{$shop.name}">
          </a>
        </div>
        <div class="d-none d-md-flex col-md-4 col-sm-12">
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
      <div class="row d-none d-md-flex no-gutters position-relative">
        <div class="col-md-7 col-12 d-flex align-items-center">
          {hook h='displayBar1'}
        </div>
        <div class="col-md-5 right-nav d-flex flex-row-reverse align-items-center position-static">
          {hook h='displayBar2'}
        </div>
      </div>

      <div id="_mobile_search_widget"></div>
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