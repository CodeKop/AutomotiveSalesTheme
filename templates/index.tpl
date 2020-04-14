{extends file='page.tpl'}

{block name='page_content_container'}
  <section id="content" class="page-home">
    {block name='page_content_top'}{/block}

    {block name='page_content'}
      {block name='hook_home'}
        {$HOOK_HOME nofilter}
      {/block}
    {/block}
  </section>

  <section id="float" class="page-float">
    {block name='hook_brands'}
      {widget name="ps_brandlist"}
    {/block}
  </section>
{/block}
