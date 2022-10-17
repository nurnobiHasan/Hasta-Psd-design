$(document).ready(function(){
  $(".header-bottom-area").owlCarousel({
	  items:1,
	loop:true,
	autoplay:true,
	
	autoplayTimeout:5000,
	});
	 $('.img-gallary a').magnificPopup({
		 type:'image',
		 gallery:{
			enabled:true
			}
		 
		 });
	$('.single-company-progress span').counterUp({
		 delay:20,
		time: 2000
	});
	 $(".our-clients-reviews").owlCarousel({
	items:1,
	loop:true,
	autoplay:true,
	dots:true,
	autoplayTimeout:5000,
	});
	$(".scroll-bar").click(function(){
		$("html").animate({
			"scrollTop":"300",
		},2000);
	});
	$(window).scroll(function(){
		var a=$(window).scrollTop();
		if(a>300){
			$(".scroll-bar").fadeIn();
		}
		else{
			$(".scroll-bar").fadeOut();
		}
		
	});
	$(".mobile-menu").click(function(){
		$(".header-top-area nav ul").slideToggle();
	});
	$("#sticker").sticky({topSpacing:0});

	
});