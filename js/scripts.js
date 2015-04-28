jQuery(document).ready(function($) {

	$('ul.navmenu li span').click(function(event) {
		event.preventDefault();
		var child_menu = $(this).parent().parent().children('ul');
		var parent_link = $(this).parent();
		if (child_menu.hasClass('childopen')) {
			$(parent_link).removeClass('active');
			$(child_menu).removeClass('childopen');
			$(this).html('+');
		} else {
			$('ul.navmenu ul').removeClass('childopen');
			$('ul.navmenu li span').html('+');
			$('active').removeClass('active');
			$(parent_link).addClass('active');
			$(child_menu).addClass('childopen');
			$(this).html('-');

			return false;
		}
	});

	$('.navicon').click(function(){
    
    if ( $('.navmenu').css('display') == 'none' ) {

      $('.navmenu').addClass('show');
      $('.navicon').removeClass('closed').addClass('open');
      $('.navicon').children('.fa').removeClass('fa-navicon').addClass('fa-close');

    } else {

      $('.navmenu').removeClass('show');
      $('.navicon').removeClass('open').addClass('closed');
      $('.navicon').children('.fa').removeClass('fa-close').addClass('fa-navicon');

    }

  });

	function responsiveIframe() {
		$('iframe').each(function() {
			var iw = $(this).width();
			var ih = $(this).height();
			var ip = $(this).parent().width();
			var ipw = ip/iw;
			var ipwh = Math.round(ih*ipw);
			$(this).css({
				'width': ip,
				'height': ipwh,
			});
		});
	}

	responsiveIframe();

	$(window).resize(function() {
		responsiveIframe();
	});

	var watch_el = $('body');
	var el_height = watch_el.innerHeight();

	window.setInterval(function() {
		var new_height = watch_el.innerHeight();
		if (new_height != el_height) {
			el_height = new_height;
			responsiveIframe();
		}
	}, 200);

});