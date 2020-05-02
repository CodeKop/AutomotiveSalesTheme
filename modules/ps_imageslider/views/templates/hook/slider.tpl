
{if $homeslider.slides}
  <div id="carousel" data-ride="carousel" class="carousel slide row" data-interval="{$homeslider.speed}" data-wrap="{(string)$homeslider.wrap}" data-pause="{$homeslider.pause}" data-touch="true">
    <ol class="carousel-indicators">
      {foreach from=$homeslider.slides item=slide key=idxSlide name='homeslider'}
      <li data-target="#carousel" data-slide-to="{$idxSlide}"{if $idxSlide == 0} class="active"{/if}></li>
      {/foreach}
    </ol>
    <ul class="carousel-inner" role="listbox">
      {foreach from=$homeslider.slides item=slide name='homeslider'}
        <li class="carousel-item {if $smarty.foreach.homeslider.first}active{/if}" role="option" aria-hidden="{if $smarty.foreach.homeslider.first}false{else}true{/if}">
          <a href="{$slide.url}">
            <figure>
              <img src="{$slide.image_url}" alt="{$slide.legend|escape}">
              {if $slide.title || $slide.description}
                <figcaption class="carousel-caption">
                  {if $slide.title}<h2 class="display-2 text-uppercase">{$slide.title}</h2>{/if}
                  {if $slide.description}
                  <div class="caption-description d-none d-md-block">{$slide.description nofilter}</div>
                  {/if}
                  <button href="{$slide.url}" class="caption-cta d-block d-md-none">
                    <span>Explore</span>
                    <i class="material-icons btn-icon">&#xe5c8;</i>
                  </button>
                </figcaption>
              {/if}
            </figure>
          </a>
        </li>
      {/foreach}
    </ul>
    <div class="direction" aria-label="{l s='Carousel buttons' d='Shop.Theme.Global'}">
      <a class="left carousel-control carousel-control-prev" href="#carousel" role="button" data-slide="prev" aria-label="{l s='Previous' d='Shop.Theme.Global'}">
        <span class="carousel-control-icon carousel-control-prev-icon" aria-label="Previous">
          <i class="fa fa-chevron-left"></i>
        </span>
      </a>
      <a class="right carousel-control carousel-control-next" href="#carousel" role="button" data-slide="next" aria-label="{l s='Next' d='Shop.Theme.Global'}">
        <span class="carousel-control-icon carousel-control-next-icon" aria-label="Next">
          <i class="fa fa-chevron-right"></i>
        </span>
      </a>
    </div>
  </div>
{/if}
