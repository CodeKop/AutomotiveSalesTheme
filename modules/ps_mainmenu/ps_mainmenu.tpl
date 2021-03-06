{assign var=_counter value=0}
{function name="menu" nodes=[] depth=0 parent=null}
    {if $nodes|count}
      <ul class="top-menu" {if $depth == 0}id="top-menu"{/if} data-depth="{$depth}">
        {foreach from=$nodes item=node}
            <li class="{$node.type}{if $node.current} current{/if} menu--item" id="{$node.page_identifier}">
            {assign var=_counter value=$_counter+1}
              <a
                class="{if $depth >= 0}dropdown-item{/if}{if $depth === 1} dropdown-submenu{/if} navbar flex-nowrap"
                href="{$node.url}" data-depth="{$depth}"
                {if $node.open_in_new_window} target="_blank"{/if}
              >
                <span class="navbar-text">{$node.label}</span>
                {if $node.children|count}
                  {* Cannot use page identifier as we can have the same page several times *}
                  {assign var=_expand_id value=10|mt_rand:100000}
                  <button data-toggle="collapse" data-target="#top_sub_menu_{$_expand_id}"
                     aria-expanded="false" aria-label="Show {$node.label} items"
                     class="navbar-toggler collapse-icons d-md-none">
                    <i class="material-icons navbar-toggler-icon add">&#xe145;</i>
                    <i class="material-icons navbar-toggler-icon remove">&#xe15b;</i>
                  </button>
                  
                  <span class="navbar-icon d-none d-md-block">
                    <i class="material-icons">
                      {if $depth == 0}&#xe313;{elseif $depth >= 0}&#xe315;{/if}
                    </i>
                  </button>
                {/if}
              </a>
              {if $node.children|count}
              <div class="submenu js-sub-menu collapse" id="top_sub_menu_{$_expand_id}">
                {menu nodes=$node.children depth=$node.depth parent=$node}
              </div>
              {/if}
            </li>
        {/foreach}
      </ul>
    {/if}
{/function}

<div class="menu js-top-menu d-none d-md-inline-block" id="_desktop_top_menu">    
  {menu nodes=$menu.children}
  <div class="clearfix"></div>
</div>
