jQuery( document ).ready( function( $ ) {

  var $isotopGrid = $('.isotope-grid');
  
  $isotopGrid.isotope({
    // options
    layoutMode: 'fitRows'
  });

  $('.js-filter-group').on( 'click', 'a', function() {
  	event.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $isotopGrid.isotope({ filter: '.' + filterValue });
    console.log($(this).parent().parent().children().children());
    $(this).parent().parent().children().children().removeClass('menu-selected');
    if (!$(this).parent().parent().children().children().hasClass('menu-border-animate')) {
    	$(this).parent().parent().children().children().addClass('menu-border-animate')
    }
    $(this).addClass('menu-selected');
  });

});