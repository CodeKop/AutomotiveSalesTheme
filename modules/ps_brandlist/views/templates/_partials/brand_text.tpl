<div class="facets-scroll swiper-container >
  <ul class="facets swiper-wrapper" data-products="{count($brands)}">
    {foreach from=$brands item=brand name=brand_list}
      {if $smarty.foreach.brand_list.iteration <= $text_list_nb}
        <li class="facet-label col-md-3 col-12 swiper-slide">
          <a class="d-block h-100 position-relative" href="{$brand['link']}" title="{$brand['name']}">
            <img class="facet-image" src="{$urls.img_manu_url}{$brand['image']}-medium_default.jpg" />
            <span class="facet-text text-dark">{$brand['name']}</span>
          </a>
        </li>
      {/if}
    {/foreach}
  </ul>

  <div class="swiper-button-prev" role="button">
    <i class="material-icons">&#xe314;</i>
  </div>
  <div class="swiper-button-next" role="button">
    <i class="material-icons">&#xe315;</i>
  </div>
</div>