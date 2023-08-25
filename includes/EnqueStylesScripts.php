<?php 

namespace LearningPalace;

/**
 * Enquing all styles and all scripts
 */
class EnqueStylesScripts {

    /**
     * Constructor
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueueScripts' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueueStyles' ] );
    }

    /**
     * Enques all scripts
     */
    public function enqueueScripts() {
        wp_enqueue_script('main-js', get_template_directory_uri() . '/dist/main.js' );
    }

    /**
     * Enques all styles
     */
    public function enqueueStyles() {
        wp_register_style('main-css', get_template_directory_uri() . '/dist/main.css' );
        wp_enqueue_style ('main-css');
    }
}