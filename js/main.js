$(document).ready(main);

var contador = 0;

function main () {
	$('.menu_bar').click( function (){
		if (contador == 0) {
			$('nav').animate({
				left: '0'
			});
			contador = 1;
		} else {
			$('nav').animate({
				left: '-100%'
			});
			contador=0;
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}