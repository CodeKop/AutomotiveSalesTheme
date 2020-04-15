{assign var=_counter value=0}
{function name="menu" nodes=[] depth=0 parent=null}
    {if $nodes|count}
      <ul class="top-menu {if $depth == 0}d-none{else}d-flex{/if}flex-column text-left align-items-stretch" {if $depth == 0}id="top-menu"{/if} data-depth="{$depth}">
        {foreach from=$nodes item=node}
            <li class="{$node.type}{if $node.current} current {/if}" id="{$node.page_identifier}">
            {assign var=_counter value=$_counter+1}
              <a
                class="{if $depth >= 0}dropdown-item{/if}{if $depth === 1} dropdown-submenu{/if}"
                href="{$node.url}" data-depth="{$depth}"
                {if $node.open_in_new_window} target="_blank" {/if}
              >
                {if $node.children|count}
                  {* Cannot use page identifier as we can have the same page several times *}
                  {assign var=_expand_id value=10|mt_rand:100000}
                  <span class="menu-icon">
                    <span data-target="#top_sub_menu_{$_expand_id}" data-toggle="collapse" class="navbar-toggler collapse-icons d-md-none">
                      <i class="fa fa-chevron-down add"></i>
                      <i class="fa fa-chevron-up remove"></i>
                    </span>
                    <span class="d-none d-md-block">
                      <i class="fa fa-chevron-right"></i>
                    </span>
                  </span>
                {/if}
                {$node.label}
              </a>
              {if $node.children|count}
              <div class="{if $depth === 0}popover sub-menu js-sub-menu collapse{else}collapse{/if}" id="top_sub_menu_{$_expand_id}">
                {menu nodes=$node.children depth=$node.depth parent=$node}
              </div>
              {/if}
            </li>
        {/foreach}
      </ul>
    {/if}
{/function}

<div class="menu js-top-menu d-none d-md-inline-block h-100" id="_desktop_top_menu">
    <div class="menu-header d-none d-md-block">
      <span class="menu-header-text">Categories</span>
      <i class="menu-header-icon fa fa-chevron-down"></i>
    </div>
    
    {menu nodes=$menu.children}
    <div class="clearfix"></div>
</div>
