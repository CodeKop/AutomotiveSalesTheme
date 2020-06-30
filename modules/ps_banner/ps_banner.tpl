<a class="banner container-fluid" href="{$banner_link}" title="{$banner_desc}">
  <div class="container">
    {if isset($banner_img)}
      <img src="{$banner_img}" alt="{$banner_desc}" title="{$banner_desc}" class="img-fluid">
    {else}
      <span>{$banner_desc}</span>
    {/if}
  </div>
</a>
