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
                                    <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar{$node.id}" aria-expanded="false" aria-label="Show {$node.name} children">
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
            <span class="arrows" data-toggle="collapse" data-target="#exCollapsingNavbar{$node.id}" aria-expanded="false" aria-label="Show {$node.name} children">
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

<div class="row">
  <div class="block-categories d-none d-md-block flex-fill">
      <ul class="category-top-menu">
          {if isset($category) && $category|count}
          {if Category::categoryExists($category.id_parent)}
          {assign var="parent" value=Category::getCategoryInformation([$category.id_parent])}
          {assign var="parent_link" value=Link::getUrlSmarty([
          'entity' => 'category',
          'id' => $category.id_parent
          ])}
          <li class="category-return">
              <a href="{$parent_link}" title="Go to parent category">
                  <i class="material-icons">&#xe5c4;</i>
                  <span>{$parent[$category.id_parent].name}</span>
              </a>
          </li>
          {/if}
          {/if}

          <li class="category-title">
              <a class="h5" href="{$categories.link nofilter}">{$categories.name}</a>
          </li>

          {if $categories.children|count}
          <li class="category-tree">{categories nodes=$categories.children}</li>
          {else}
          <li class="category-tree empty">
              There are no subcategories to display.
          </li>
          {/if}
      </ul>
  </div>
</div>
