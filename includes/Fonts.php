<?php 

namespace Palace;

/**
 * Adding fonts
 * 
 * Typicaly projects are using google fonts, those can be found easily accesable in here: https://gwfh.mranftl.com/fonts
 */
class Fonts {

    /**
     * Constructor
     */
    public function __construct() {
        add_action('wp_head', [$this, 'preloadLocalFonts'], 1);
        add_action('wp_head', [$this, 'loadLocalFonts'], 2);
        add_action('admin_head',  [$this, 'loadLocalFonts'], 2);
    }

    /**
     * Preload single font, to make page loading look little bit better
     */
    public function preloadLocalFonts() {
        $themeUrl = wp_normalize_path( get_stylesheet_directory_uri() );
        ?>
        <link
            rel="preload"
            href="<?php echo $themeUrl . '/src/fonts/poppins-v20-latin_latin-ext-regular.woff2'; ?>"
            as="font"
            type="font/woff"
            crossorigin>
        <?php
    }

    /**
     * Load all variations of the fonts
     */
    public function loadLocalFonts() {
        $themeUrl = wp_normalize_path( get_stylesheet_directory_uri() );
        ?>
        <style>
            /* poppins-regular - latin_latin-ext */
            @font-face {
            font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            src: url(<?php echo $themeUrl . '/src/fonts/poppins-v20-latin_latin-ext-regular.woff2' ?>) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            }

            /* poppins-500 - latin_latin-ext */
            @font-face {
            font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            src: url(<?php echo $themeUrl . '/src/fonts/poppins-v20-latin_latin-ext-500.woff2' ?>) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            }

            /* poppins-700 - latin_latin-ext */
            @font-face {
            font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            src: url(<?php echo $themeUrl . '/src/fonts/poppins-v20-latin_latin-ext-700.woff2' ?>) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            }

        </style>
        <?php
    }
}