$(document).ready(function(){

	function scrollHeader(){
		if ( $(window).width() > 767 ) {
			var st = $(window).scrollTop();
			if ( st > 136 ) {
				$('.header').addClass('active');
			} else {
				$('.header').removeClass('active');
			}
		} else {
			$('.header').removeClass('active');
		}
	}
	scrollHeader();

	$(window).scroll(function(){
		scrollHeader();
	});

});