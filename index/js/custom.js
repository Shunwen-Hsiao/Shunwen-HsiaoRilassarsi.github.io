$(document).ready(function() {


	// logo change when scroll滾動畫面改變navbar
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// rellax initialization視差滾動
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
		

	// carousel plugin initialization滑動圖插件
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        1600:{
	            items:5
	        }
	    }
	})
});