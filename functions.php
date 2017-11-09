<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});
	
	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});
	
	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

	function language_selector() {
		$languages = icl_get_languages('skip_missing=0&orderby=code');
		if(!empty($languages)){
			foreach($languages as $l){
				if(!$l['active']) { 
					return array ($l['url'], $l['native_name']);
				}
			}
		}
	}

}

new StarterSite();

function  aafd_cdn_srcset ( $sources ) {
	foreach ($sources as $source) {
		$sources [$source['value']]['url'] = str_replace('https://www.womenanddrugs.wola.org', 'https://4f4oih3a4j243wk2wy43xkym-wpengine.netdna-ssl.com', $sources[$source['value']]['url']);
		// you MAY use external domains as well
		// $ sources [$ source ['value']] ['url'] = str_replace ('http://www.example.com', 'https://static.examplecdnprovider.com', $ sources [$ source ['value']] ['url']);
	}
	return  $sources ;
}
add_filter ('wp_calculate_image_srcset', 'aafd_cdn_srcset' );
