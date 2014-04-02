$(window).load(function() {
	$('.range').each(function() {
		handle = $(this).find('.ui-slider-handle');    
		var start = $(this).slider('values',0);
		handle.eq(0).addClass('first').append('<span class="value">'+start+'<em>o</em></span>');
		var mf = handle.eq(0).find('span').width() / 2;
		handle.eq(0).find('span').css({'margin-left': -mf+'px'});
		var end = $(this).slider('values',1);
		handle.eq(1).addClass('second').append('<span class="value">'+end+'<em>o</em></span>');
		var ms = handle.eq(1).find('span').width() / 2;
		handle.eq(1).find('span').css({'margin-left': -ms+'px'});
	});
});
function content() {
	var mincontent = $(window).height()-$('.top').height()-$('.footer').height()-131;
	$('.content').css({'min-height': mincontent+'px'});
}
$(window).resize(function() {
	content();
});
$(document).ready(function() {
	content();
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 7500,
		pause: 2500
	});
	$('.catalog > div > div > div, .products > div, .similar > div > div').prepend('<span></span>');
	$('.catalog > div > div > div, .products > div, .similar > div > div').hover(
		function() {
			$(this).children('.buttons, span').stop(true, true).fadeIn(500);
		},
		function() {
			$(this).children('.buttons, span').stop(true, true).fadeOut(500);
		}
	);
	$('.main .information .reviews > div > div').append('<span></span>');
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.intro .nav > div > ul > li, .lb .nav > div > ul > li').has('div').hover(
		function() {
			$(this).parents('.nav').addClass('hover');
			$(this).addClass('active');
			$(this).children('div').stop(true, true).fadeIn(0);
		},
		function() {
			$(this).parents('.nav').removeClass('hover');
			$(this).removeClass('active');
			$(this).children('div').stop(true, true).fadeOut(0);
		}
	);
	var minintronav = $('.intro .nav').height();
	$('.lb .special').each(function() {
		var sm = $(this).find('div div').height()/2-1;
		$(this).find('div div').css({'margin-top': -sm+'px'});
	});
	$('.lb .delivery').each(function() {
		var dm = $(this).find('div').height()/2+3;
		$(this).find('div').css({'margin-top': -dm+'px'});
	});
	$('.range').slider({
		range: true,
		min: 0,
		max: 10000,
		step: 100,
		values: [1000, 6000],
		stop: function(event, ui) {
			var start = $(this).slider('values',0);
			var end = $(this).slider('values',1);
			handle = $(this).find('.ui-slider-handle');
			handle.eq(0).empty().append('<span class="value">'+$(this).slider("values",0)+'<em>o</em></span>');
			var mf = handle.eq(0).find('span').width() / 2;
			handle.eq(0).find('span').css({'margin-left': -mf+'px'});
			handle.eq(1).empty().append('<span class="value">'+$(this).slider("values",1)+'<em>o</em></span>');
			var ms = handle.eq(1).find('span').width() / 2;
			handle.eq(1).find('span').css({'margin-left': -ms+'px'});
		},
		slide: function(event, ui){
			var start = $(this).slider('values',0);
			var end = $(this).slider('values',1);
			handle = $(this).find('.ui-slider-handle');
			handle.eq(0).empty().append('<span class="value">'+$(this).slider("values",0)+'<em>o</em></span>');
			var mf = handle.eq(0).find('span').width() / 2;
			handle.eq(0).find('span').css({'margin-left': -mf+'px'});
			handle.eq(1).empty().append('<span class="value">'+$(this).slider("values",1)+'<em>o</em></span>');
			var ms = handle.eq(1).find('span').width() / 2;
			handle.eq(1).find('span').css({'margin-left': -ms+'px'});
		}
    });
	var moretabs = $('.item .information .more > div');
	$('.item .information .more ul li a').click(function () {
		moretabs.hide();
		moretabs.filter(this.hash).stop(true, true).fadeIn(0);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('.intro .nav ul li > div > div').css({'min-height': minintronav+'px'});
	$('.modal').append('<span class="close"></span>');
	$('.modal').each(function() {
		var mh = ($(this).height()+44)/2;
		$(this).css({'margin-top': -mh+'px'});
	});
	var bt = 0;
	$('.products button.order').bind('click', function() {
		$('#callorder, .fade').fadeIn(150);
		bt = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bt+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal .close').bind('click', function() {
		$(this).parent().fadeOut(150);
		$('.fade').fadeOut(150);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bt);
		return false;
	});
	$('.fade').bind('click', function() {
		$('.fade, div.modal').fadeOut(150);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bt);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
			$('.fade, div.modal').fadeOut(150);
			$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
			$('body').scrollTop(bt);
		}
	});
	$('.header .basket > div').append('<span></span>');
	$('.header .basket').hover(
		function() {
			$(this).children('div').stop(true, true).fadeIn(150);
		},
		function() {
			$(this).children('div').stop(true, true).fadeOut(150);
		}
	);	
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('.content .order > div ul li a').click(function() {
		$(this).addClass('active');
		$(this).parent().siblings().find('a').removeClass('active');
		return false;
	});
	$('.menu li:last-child, .footer li:last-child').css({'margin-right': '-10px'});
	$('.header .basket table td:last-child').css({'text-align': 'right'});
	$('.catalog > div > div > div:nth-child(4n), .products > div:nth-child(3n), .similar > div > div:nth-child(4n)').css({'margin-right': '-3px'});
});
