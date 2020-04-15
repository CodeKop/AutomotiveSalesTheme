{extends file='page.tpl'}

{block name='page_content_container'}
  <section id="content" class="page-home position-relative right-floater">
    {block name='page_content_top'}{/block}

    {block name='page_content'}
      {block name='hook_home'}
        {$HOOK_HOME nofilter}
      {/block}
    {/block}

    <aside id="content-floater" class="page-float d-none d-md-block">
      <div class="floater">
        {block name='hook_brands'}
          {widget name="ps_brandlist"}
        {/block}
      </div>
    </aside>
  </section>
{/block}
