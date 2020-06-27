<a class="banner container-fluid border-bottom" href="{$banner_link}" title="{$banner_desc}">
  <div class="container py-3 border-left border-right">
    {if isset($banner_img)}
      <img src="{$banner_img}" alt="{$banner_desc}" title="{$banner_desc}" class="img-fluid">
    {else}
      <span>{$banner_desc}</span>
    {/if}
  </div>
</a>
