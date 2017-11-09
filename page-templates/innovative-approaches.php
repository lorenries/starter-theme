<?php
/*
Template Name: Innovative Approaches
*/
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render('page-innovative-approaches.twig', $context );
?>