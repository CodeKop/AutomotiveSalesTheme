
<div class="col-md-2 links wrapper">
  <h3 class="d-none d-md-block">{l s='Information' d='Modules.Legalcompliance.Shop'}</h3>
  <div class="title clearfix d-md-none" data-target="#footer_eu_about_us_list" data-toggle="collapse">
    <span class="h3">{l s='Information' d='Modules.Legalcompliance.Shop'}</span>
    <span class="float-right">
      <span class="navbar-toggler collapse-icons">
        <i class="fa fa-chevron-down add"></i>
        <i class="fa fa-chevron-up remove"></i>
      </span>
    </span>
  </div>
  <ul class="collapse" id="footer_eu_about_us_list">
    {foreach from=$cms_links item=cms_link}
      <li>
        <a href="{$cms_link.link}" class="cms-page-link" title="{$cms_link.description|default:''}" id="{$cms_link.id}"> {$cms_link.title} </a>
      </li>
    {/foreach}
  </ul>
</div>
