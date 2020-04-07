{block name='product_miniature_item'}
<div itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="col-md-4 col-sm-3 col-12 p-0 slider-item">
  <meta itemprop="position" content="{$position}" />
  <article class="product-miniature js-product-miniature card my-md-4 mx-md-2 m-2 border-0" data-id-product="{$product.id_product}" data-id-product-attribute="{$product.id_product_attribute}" itemprop="item" itemscope itemtype="http://schema.org/Product">
    <div class="thumbnail-container">
      {json_encode($product)}
      {block name='product_thumbnail'}
        {if $product.cover}
          {assign var='coverImage' value=Product::getCover($product->id)}
          {assign var='coverImageId' value="{$product->id}-{$coverImage.id_image}"}
          <a href="{$product.url}" class="thumbnail product-thumbnail card-img-top px-md-3 pt-md-3 px-4 pt-4 d-block">
            <img
              src="{$link->getImageLink($product.link_rewrite, $coverImageId)}"
              alt="{if !empty($product.cover.legend)}{$product.cover.legend}{else}{$product.name|truncate:30:'...'}{/if}"
              data-full-size-image-url="{$product.cover.large.url}"
              />
          </a>
        {else}
          <a href="{$product.url}" class="thumbnail product-thumbnail px-3 pt-3 d-block">
            <img src="{$urls.no_picture_image.bySize.home_default.url}" />
          </a>
        {/if}
      {/block}

      <div class="highlighted-informations{if !$product.main_variants} no-variants{/if} d-none d-md-block">
        {block name='product_variants'}
          {if $product.main_variants}
            {include file='catalog/_partials/variant-links.tpl' variants=$product.main_variants}
          {/if}
        {/block}
      </div>

      <div class="product-description card-body">
        {block name='product_name'}
          {if $page.page_name == 'index'}
            <h5 class="h5 product-title card-title mb-1" itemprop="name">
              <a href="{$product.url}" itemprop="url" content="{$product.url}">{$product.name}</a>
            </h5>
          {else}
            <h4 class="h5 product-title card-title mb-1" itemprop="name">
              <a href="{$product.url}" itemprop="url" content="{$product.url}">{$product.name}</a>
            </h4>
          {/if}
        {/block}

        {block name='product_price_and_shipping'}
          {if $product.show_price}
            <div class="product-price-and-shipping">
              {hook h='displayProductPriceBlock' product=$product type="before_price"}

              <span class="price" aria-label="{l s='Price' d='Shop.Theme.Catalog'}">
                {$product.price}
              </span>

              {if $product.has_discount}
                {hook h='displayProductPriceBlock' product=$product type="old_price"}

                <span class="regular-price text-muted" aria-label="{l s='Regular price' d='Shop.Theme.Catalog'}"><del>{$product.regular_price}</del></span>
                {* {if $product.discount_type === 'percentage'}
                  <span class="discount-percentage discount-product text-muted">{$product.discount_percentage}</span>
                {elseif $product.discount_type === 'amount'}
                  <span class="discount-amount discount-product text-muted">{$product.discount_amount_to_display}</span>
                {/if} *}
              {/if}

              <div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="invisible">
                <meta itemprop="priceCurrency" content="{$currency.iso_code}" />
                <meta itemprop="price" content="{$product.price_amount}" />
              </div>

              {hook h='displayProductPriceBlock' product=$product type='unit_price'}

              {hook h='displayProductPriceBlock' product=$product type='weight'}
            </div>
          {/if}
        {/block}

        {block name='product_features'}
        <div class="product-features">
          {foreach from=$products.features item=feature}
            <div id="product-feature-{$feature.id_feature}" class="product-feature">            
              <div class="feature-icon
                {if $feature.name === "Inner Dimension"}
                  inner-dimension
                {elseif $feature.name === "Outer Dimension"}
                  outer-dimension
                {/if}"></div>
            </div>
          {/foreach}
        </div>
        {/block}

        {block name='product_reviews'}
          {hook h='displayProductListReviews' product=$product}
        {/block}
      </div>

      {include file='catalog/_partials/product-flags.tpl'}
    </div>
  </article>
</div>
{/block}
