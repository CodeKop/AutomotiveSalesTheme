<div class="col-md-6 links border-right py-md-3">
  <div class="row">
  {foreach $linkBlocks as $linkBlock}
    <div class="col-md-6 wrapper">
      <p class="h3 d-none d-md-block links-title">{$linkBlock.title}</p>
      {assign var=_expand_id value=10|mt_rand:100000}
      <div class="title clearfix d-md-none" data-target="#footer_sub_menu_{$_expand_id}" data-toggle="collapse">
        <span class="h3">{$linkBlock.title}</span>
        <span class="float-right">
          <span class="navbar-toggler collapse-icons">
            <i class="fa fa-chevron-down add"></i>
            <i class="fa fa-chevron-up remove"></i>
          </span>
        </span>
      </div>
      <ul id="footer_sub_menu_{$_expand_id}" class="collapse">
        {foreach $linkBlock.links as $link}
          <li>
            <a
                id="{$link.id}-{$linkBlock.id}"
                class="{$link.class}"
                href="{$link.url}"
                title="{$link.description}"
                {if !empty($link.target)} target="{$link.target}" {/if}
            >
              {$link.title}
            </a>
          </li>
        {/foreach}
      </ul>
    </div>
  {/foreach}
  </div>
</div>
