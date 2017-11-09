<?php
/*
Template Name: Videos
*/
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render('page-videos.twig', $context );
?>