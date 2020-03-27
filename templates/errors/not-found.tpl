<section id="content" class="page-content page-not-found text-dark">
  {block name='page_content'}

    {* <h4>{l s='Sorry for the inconvenience.' d='Shop.Theme.Global'}</h4>
    <p>{l s='Search again what you are looking for' d='Shop.Theme.Global'}</p> *}
    <div class="warning --left fa fa-minus-circle"></div>
    <div class="warning --right fa fa-minus-circle"></div>

    {block name='error_title'}
      <h1 class="page-title">Oh No!</h1>
    {/block}

    {block name='error_subtitle'}
      <div class="page-subtitle">
        <p>{l s='You have reached a dead end.' d='Shop.Theme.Global'}</p>    
        <p>
          {l s='Try our ' d='Shop.Theme.Global'}
          <a href="#" class="font-weight-bold">{l s='search' d='Shop.Theme.Global'}</a>
          {l s=' or go to our ' d='Shop.Theme.Global'}
          <a href="{$urls.pages.index}" class="font-weight-bold">{l s='home page' d='Shop.Theme.Global'}</a>
          .
        </p>
      </div>
    {/block}

    {block name='search'}
      {hook h='displaySearch'}
    {/block}

    {block name='hook_not_found'}
      {hook h='displayNotFound'}
    {/block}

    <div class="page-footer text-left d-block">
    <a href="{$urls.pages.index}">
        <i class="fa fa-reply vehicle-icon"></i>
        <span>Return to previous page</span>
      </a>
      <a href="{$urls.pages.index}" class="float-right">
        <span>Go Back Home</span>
        <i class="fa fa-home vehicle-icon"></i>
      </a>
    </div>

  {/block}
</section>
