<?php
/*
Template Name: Home
*/
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['photo_essays'] = Timber::get_posts('post_type=photo_essay');
$context['taxonomies'] = Timber::get_terms('country', array('hierarchical' => 0));
$context['description'] = get_post_type_object( 'photo_essay' ) -> description;
Timber::render('home.twig', $context );
?>