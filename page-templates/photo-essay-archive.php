<?php
/*
Template Name: Photo Essay Archive
*/
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['photo_essays'] = Timber::get_posts('post_type=photo_essay');
$context['taxonomies'] = Timber::get_terms('country', array('hierarchical' => 0));
Timber::render('page-photo-essay-archive.twig', $context );
?>