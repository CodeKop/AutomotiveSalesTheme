<nav data-depth="{$breadcrumb.count}" class="breadcrumb d-none d-md-block">
  <ol itemscope itemtype="http://schema.org/BreadcrumbList">
    {block name='breadcrumb'}
      {foreach from=$breadcrumb.links item=path name=breadcrumb}
        {block name='breadcrumb_item'}
          {if not $smarty.foreach.breadcrumb.last}
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              <a itemprop="item" href="{$path.url}"><span itemprop="name">{$path.title}</span></a>
              <meta itemprop="position" content="{$smarty.foreach.breadcrumb.iteration}">
            </li>
          {elseif isset($path.title)}
            <li>
              <span>{$path.title}</span>
            </li>
          {/if}
        {/block}
      {/foreach}
    {/block}
  </ol>
</nav>
