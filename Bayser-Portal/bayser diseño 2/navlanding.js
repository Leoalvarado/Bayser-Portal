$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 50){
			if(!flag){
				$("nav").css({"background-color": "rgba(20, 19, 19, 0.68)"});
				flag = true;
			}
		}else{
			if(flag){
				$("nav").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});