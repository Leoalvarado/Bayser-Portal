$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 30){
			if(!flag){
				$("nav").css({"background-color": "rgba(20, 19, 19, 0.68)"});
				$("header nav ul li a").css({"color": "white"});
				$("ul li ul li a").css({"color": "white"});
				
				/*$("ul li ul").css({"background-color": "rgba(20, 19, 19, 0.68)"});*/
				flag = true;
			}
		}else{
			if(flag){
				$("nav").css({"background-color": "rgba(20, 19, 19, 0.68)"});
				$("header nav ul li a").css({"color": "white"});
				$("ul li ul li a").css({"color": "white"});
				flag = false;
			}
		}


	});

});