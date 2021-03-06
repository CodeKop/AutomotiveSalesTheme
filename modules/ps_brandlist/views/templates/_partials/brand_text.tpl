<ul class="facets" data-products="{count($brands)}">
  {foreach from=$brands item=brand name=brand_list}
    {if $smarty.foreach.brand_list.iteration <= $text_list_nb}
      <li class="facet-label col-4 col-md-auto">
        <a class="position-relative" href="{$brand['link']}" title="{$brand['name']}">
            <img class="facet-image" src="{$urls.img_manu_url}{$brand['image']}-medium_default.jpg" />
            <span class="facet-text">{$brand['name']}</span>
        </a>

        <script type="application/ld+json">
          {literal}{{/literal}
            "@context": "https://schema.org",
            "@type": "Brand",
            "logo": "{$urls.img_manu_url}{$brand['image']}-medium_default.jpg",
            "url": "{$brand['link']}",
            "name": "{$brand['name']}"
          {literal}}{/literal}
        </script>
      </li>
    {/if}
  {/foreach}
</ul>
