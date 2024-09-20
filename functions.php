<?php

/**
 * adds autoloader from composer
 */
if (file_exists( dirname(__FILE__) . '/vendor/autoload.php')) {
    $loader = require_once 'vendor/autoload.php';
} else {
    return;
}


new \Palace\EnqueStylesScripts();
new \Palace\Fonts();

include_once( __DIR__ . '/block-includer.php');