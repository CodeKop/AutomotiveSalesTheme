{extends file='page.tpl'}

{block name='page_header_container'}{/block}

{block name='left_column'}
  <div id="left-column" class="col-12 col-sm-4 col-md-3 float-md-left">
    {widget name="ps_contactinfo" hook='displayLeftColumn'}
  </div>
{/block}

{block name='page_content_container'}
	<section id="content" class="page-home" itemscope itemtype="http://schema.org/ContactPage">
		{block name='page_content_top'}{/block}

		{block name='page_content'}
			{widget name="contactform"}
		{/block}
	</section
{/block}
