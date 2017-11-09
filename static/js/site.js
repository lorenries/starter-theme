$(document).ready( function() {

  feather.replace();

  var $mobileMenuButton = $('.js-menu-button');
  var $mobileMenu = $('.js-menu-mobile');
  var $body = $('body');

  $mobileMenuButton.unbind('click').click(function(event) {
  	event.preventDefault();
  	if ($mobileMenuButton.hasClass('open')) {
  		toggleMenuClose();
  	} else {
  		toggleMenuOpen();
  	}
  })

  function toggleMenuOpen() {
  	$mobileMenu.removeClass('dn');
  	$mobileMenu.addClass('flex');
  	$mobileMenu.animate({
  		height: '100vh',
  		top: '0'
  	}, 800, 'swing', function() {
  		$mobileMenuButton.html('<i data-feather="x" class="w2 h-auto pa1"></i>');
  		feather.replace();
  	});
  	$body.addClass('prevent-scroll');
  	$mobileMenuButton.addClass('open');
  }

  function toggleMenuClose() {
  	$mobileMenu.animate({
  		height: '0px',
  		top: '-100%'
  	}, 500, 'swing', function() {
  		$mobileMenuButton.html('<i data-feather="menu" class="w2 h-auto pa1"></i>');
  		feather.replace();
  		$mobileMenu.addClass('dn');
  		$mobileMenu.removeClass('flex');
  	});
  	$body.removeClass('prevent-scroll');
  	$mobileMenuButton.removeClass('open');
  }

  var $isotopGrid = $('.isotope-grid').imagesLoaded( function() {
    // init Isotope after all images have loaded
    $isotopGrid.isotope({
      // options
      layoutMode: 'fitRows'
    });
  });

  $('.js-filter-group').on( 'click', 'a', function(event) {
  	event.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $isotopGrid.isotope({ filter: '.' + filterValue });
    $(this).parent().parent().children().children().removeClass('menu-selected');
    if (!$(this).parent().parent().children().children().hasClass('menu-border-animate')) {
    	$(this).parent().parent().children().children().addClass('menu-border-animate')
    }
    $(this).addClass('menu-selected');
  });

});