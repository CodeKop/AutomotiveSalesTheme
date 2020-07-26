<?php

class ProductscatalogCatalogModuleFrontController extends ModuleFrontController {
    public function initContent() {
        parent::initContent()

        $this->context->smarty->assign(array(
            "_var": "some random text"
        ));
        $this->setTemplate("catalog.tpl");
    }
}