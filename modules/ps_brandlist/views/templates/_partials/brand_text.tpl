<div class="facets-scroll">
  <ul class="facets slider" data-products="{count($brands)}">
    {foreach from=$brands item=brand name=brand_list}
      {if $smarty.foreach.brand_list.iteration <= $text_list_nb}
        <li class="facet-label slider-item col-md-3 col-12">
          <a class="d-block h-100 position-relative" href="{$brand['link']}" title="{$brand['name']}">
            <img class="facet-image" src="{$urls.img_manu_url}{$brand['image']}-medium_default.jpg" />
            <span class="facet-text">{$brand['name']}</span>
          </a>
        </li>
      {/if}
    {/foreach}
  </ul>
</div>