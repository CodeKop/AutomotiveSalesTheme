
{function name="categories" nodes=[] depth=0}
  {strip}
    {if $nodes|count}
      <ul class="category-sub-menu">
        {foreach from=$nodes item=node}
          <li data-depth="{$depth}">
            {if $depth===0}
              <div class="category-text">
                <a href="{$node.link}">{$node.name}</a>
                {if $node.children}
                  <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar{$node.id}"
                    aria-expanded="false" aria-label="Show {$node.name} children">
                    <i class="material-icons navbar-toggler-icon add">&#xe145;</i>
                    <i class="material-icons navbar-toggler-icon remove">&#xe15b;</i>
                  </div>
                {/if}
              </div>

              {if $node.children}
                <div class="collapse" id="exCollapsingNavbar{$node.id}">
                  {categories nodes=$node.children depth=$depth+1}
                </div>
              {/if}
            {else}
              <div class="category-text">
                <a class="category-sub-link" href="{$node.link}">{$node.name}</a>
                {if $node.children}
                  <span class="arrows" data-toggle="collapse" data-target="#exCollapsingNavbar{$node.id}"
                    aria-expanded="false" aria-label="Show {$node.name} children">
                    <i class="material-icons arrow-right">&#xE315;</i>
                    <i class="material-icons arrow-down">&#xE313;</i>
                  </span>
                {/if}
              </div>

              {if $node.children}
                <div class="collapse" id="exCollapsingNavbar{$node.id}">
                  {categories nodes=$node.children depth=$depth+1}
                </div>
              {/if}
            {/if}
          </li>
        {/foreach}
      </ul>
    {/if}
  {/strip}
{/function}

<div class="block-categories d-none d-md-block">
  <ul class="category-top-menu">
    <li><a class="text-uppercase h5" href="{$categories.link nofilter}">{$categories.name}</a></li>
    
    <li class="category-return">
      {json_encode($category)}
      <a href="{$category.link}">
        <i class="material-icons">&#xe314;</i>
        <span>{$category.name}</span>
      </a>
    </li>
    <li>{categories nodes=$categories.children}</li>
  </ul>
</div>
