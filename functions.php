<?php

/**
 * adds autoloader from composer
 */
if (file_exists( dirname(__FILE__) . '/vendor/autoload.php')) {
    $loader = require_once 'vendor/autoload.php';
} else {
    return;
}


new LearningPalace\EnqueStylesScripts();
new LearningPalace\Fonts();