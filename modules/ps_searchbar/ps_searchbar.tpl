<!-- Block search module TOP -->
<div id="search_widget" class="search-widget" data-search-controller-url="{$search_controller_url}">	
	<form method="get" action="{$search_controller_url}">
		<input type="hidden" name="controller" value="search">
		<input type="text" name="s" value="{$search_string}" placeholder="{l s='Search our catalog' d='Shop.Theme.Catalog'}" aria-label="{l s='Search' d='Shop.Theme.Catalog'}">
		
		<button class="search-submit" type="submit">
			<i id="search_submit" class="material-icons">&#xe8b6;</i>
		</button>
	</form>
</div>
<!-- /Block search module TOP -->
