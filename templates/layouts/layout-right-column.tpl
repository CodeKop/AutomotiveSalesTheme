{extends file='layouts/layout-both-columns.tpl'}

{block name='left_column'}{/block}

{block name='content_wrapper'}
  <div id="content-wrapper" class="right-column col-12 col-md-9 overflow-hidden">
    {hook h="displayContentWrapperTop"}
    {block name='content'}
      <p>Hello world! This is HTML5 Boilerplate.</p>
    {/block}
    {hook h="displayContentWrapperBottom"}
  </div>
{/block}
