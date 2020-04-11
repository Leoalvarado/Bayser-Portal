$(document).ready(function(){
	var imgItems = $('.slider-contenedor li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="icon-radio-checked2"></span></li>');
	} 
	//------------------------

	$('.slider-contenedor li').hide(); // Ocultanos todos los slides
	$('.slider-contenedor li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#2196f3'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 8000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider-contenedor li').hide(); // Ocultamos todos los slides
		$('.slider-contenedor li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#33333'});
		$(this).css({'color': '##2196f3'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '##2196f3'});

		$('.slider-contenedor li').hide(); // Ocultamos todos los slides
		$('.slider-contenedor li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#2196f3'});

		$('.slider-contenedor li').hide(); // Ocultamos todos los slides
		$('.slider-contenedor li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});