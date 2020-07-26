<?php
/**
 * <ModuleName> => productcatalog
 * <FileName> => template.php
 * Format Expected: <ModuleName><FileName>ModuleFileController
 */

class ProductCatalogTemplateModuleFrontController extends ModuleFrontController {
    function initContent() {
        parent::initContent();
        
        $this->context->smarty->assign(array(
        ));
        
        $this->setTemplate("module:productcatalog/views/templates/front/template.tpl"); 
    }
}