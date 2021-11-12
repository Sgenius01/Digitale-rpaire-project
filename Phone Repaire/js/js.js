$(window).on('load',function(){
	$('.loading').delay(4000).fadeOut(1000,function(){
		$('.mypage').fadeIn(1000);
	});
});
$('.colors').each(function(){
	$(this).click(function(){
		let color=$(this).attr('data-color');
		document.documentElement.style.setProperty('--color',color);
	});
});
$(document).ready(function(){
	$('.classchng span').click(function(){
		$('.classchng ul').toggle();
		$('.classchng span').toggleClass('Act');
		$('.classchng span i').toggleClass('Act1');
	});/*
	$('html').css({'scroll-behavior':'smooth'});*/
	$('.sidemenu-toggler').click(function(){
		$('.sidemenu').addClass('active');
	});
	$('.close').click(function(){
		$('.sidemenu').removeClass('active');
	});
	$('.loginMin').click(function(){
		$('.login').addClass('LoginAct');
	});
	$('.login1').click(function(){
		$('.login').addClass('LoginAct');
		$('.sidemenu').removeClass('active');
	});
	$('.register1').click(function(){
		$('.sidemenu').removeClass('active');
		$('.register').addClass('registeract');
	});
	$('.fa-times').click(function(){
		$('.register').removeClass('registeract');
		$('.forget').removeClass('forgetact');
		$('.login').removeClass('LoginAct');
		$('.Cgoose').removeClass('activeCg');
		$('.Reparinow').removeClass('ActiveRep');
	});
	$('.repairen').click(function(){
		$('.Reparinow').addClass('ActiveRep');
	});
	$('.contactus').click(function(){
		$('.sidemenu').removeClass('active');
	});
	$('#registernow').click(function(){
		$('.login').removeClass('LoginAct');
		$('.register').addClass('registeract')
	});
	$('#forget').click(function(){
		$('.forget').addClass('forgetact');
	});
	$('.choose').on('click',function(){
		$('.Cgoose').addClass('activeCg');
	});
	$(window).on('load scroll',function(){
		$('.register').removeClass('registeract');
		$('.forget').removeClass('forgetact');
		$('.login').removeClass('LoginAct');
		$('.Cgoose').removeClass('activeCg');
		$('.Reparinow').removeClass('ActiveRep');
		$('.sidemenu').removeClass('active');
		if($(this).scrollTop()>30){
			$('header').addClass('activBar');
		}else{
			$('header').removeClass('activBar');
		}
		$('section').each(function(){
			var top=$(window).scrollTop();
			var id=$(this).attr('id');
			var height=$(this).height();
			var offset=$(this).offset().top-200;
			if(top>=offset && top<height+offset){
				$('.navbar ul li a').removeClass('active');
				$('nav ul li a').removeClass('active');
				$('.navbar').find(`[href="#${id}"]`).addClass('active');
				$('nav').find(`[href="#${id}"]`).addClass('active');
			}
		});
	});
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:5,
		nav:false,
		autoplay:true,
		dots:false,
		autoplayTimeout:4000,
		//stagePadding:40,
		responsive:{
			0:{
				items:1
			},
			200:{
				items:1
			},
			400:{
				items:1
			},
			600:{
				items:1
			},
			800:{
				items:1
			},
			1000:{
				items:1
			},
			1200:{
				items:1
			},
			1400:{
				items:1
			}
		}
	});	
});
$('.accrodion-header').click(function(){
	$('.accordion .accrodion-body').slideUp();
	$(this).next('.accrodion-body').slideDown();
	$('.accordion .accrodion-header span').text('+');
	$(this).children('span').text('-');
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
