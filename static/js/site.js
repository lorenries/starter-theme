document.addEventListener('DOMContentLoaded', function() {
	feather.replace();

	var mobileMenuButton = document.querySelector('.js-menu-button');
	var mobileMenu = document.querySelector('.mobile-menu');
	var body = document.querySelector('body');

	mobileMenuButton.addEventListener('click', function(event) {
		event.preventDefault();
		console.log('clicked');
		if (mobileMenu.classList.contains('open')) {
			toggleMenuClose();
		} else {
			toggleMenuOpen();
		}
	})

	function toggleMenuOpen() {
		mobileMenu.classList.remove('closed');
		mobileMenu.classList.add('open');
		mobileMenuButton.innerHTML = '<i data-feather="x" class="w2 h-auto pa1"></i>';
		feather.replace();
		body.classList.add('prevent-scroll');
	}

	function toggleMenuClose() {
		mobileMenu.classList.remove('open');
		mobileMenu.classList.add('closed');
		mobileMenuButton.innerHTML = '<i data-feather="menu" class="w2 h-auto pa1"></i>';
		feather.replace();
		body.classList.remove('prevent-scroll');
	}

	var isotopeGrid = document.querySelector('.isotope-grid');
	
	imagesLoaded(isotopeGrid, initIsotope);

	function initIsotope() {
		
		var iso = new Isotope(isotopeGrid, {
			layoutMode: 'fitRows'
		});	

		var jsFilterGroup = document.querySelector('.js-filter-group');

		jsFilterGroup.addEventListener('click', function(event) {
			
			event.preventDefault();

			if (event.target.nodeName === 'A') {
				var filterValue = event.target.getAttribute('data-filter');
				iso.arrange({ filter: '.' + filterValue });
				for(var i = 0; i < this.children.length; i++) {
					this.children[i].firstChild.classList.remove('menu-selected');
				}
				if (!event.target.classList.contains('menu-border-animate')) {
					event.target.classList.add('menu-border-animate')
				}
				event.target.classList.add('menu-selected');
			}

		});
	}
}, false);