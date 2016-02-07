<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
function missnepal_preprocess_page(&$vars) {
   
    //Include scripts.js and masonry js
    drupal_add_js(path_to_theme() . '/js/script.js');
    
    drupal_add_js('https://npmcdn.com/masonry-layout@4.0/dist/masonry.pkgd.js', 'external');
    
    //Include css files
    drupal_add_css(path_to_theme() . '/css/miss-nepal-alpha-default.css');
}
