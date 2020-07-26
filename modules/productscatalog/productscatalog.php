<?php

if (!defined("_PS_VERSION_")) {
    exit;
}

class ProductsCatalog extends Module {
    public function __construct() {
        $this->name = "productscatalog";
        $this->tab  = "front_office_features";
        $this->version = "0.1.0";
        $this->author = "Jesse Boise";
        $this->controllers = array("catalog");
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            "min" -> "1.7",
            "max" -> _PS_VERSION_
        ]''
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l("Product Catalog");
        $this->description = $this->l("Module used to create a webpage on your PrestaShop website that displays a catalog of all of your products.");
    }

    public function install() {
        return parent::install();
    }

    public function uninstall() {
        return parent::uninstall();
    }
}