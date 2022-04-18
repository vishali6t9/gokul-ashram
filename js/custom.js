$(document).on('ready',function(){
  "use strict";

	/* 
	==============================================================
	Slick Slider Main Banner Script Start
	============================================================== 
	*/
	if($('.main_banner').length){
		$('.main_banner').slick({
			fade: true
		});
	}
	/* 
	==============================================================
	Slick Slider Main Banner Script Start
	============================================================== 
	*/
	if($('.blockquote-slider').length){
		$('.blockquote-slider').slick({
			arrows: false,
			dots: false,
			autoplay: true,
			autoplaySpeed: 1000,
			fade: true
		});
	}
	/*
	==============================================================
	Counter Script Start
	============================================================== 
	*/
	if($('.counter').length){
		$('.counter').counterUp({
			delay: 20,
			time: 1000
		});
	}
	/*
	=======================================================================
	Tool Tip Script Script
	=======================================================================
	*/
	if($('[data-toggle="tooltip"]').length){
		$('[data-toggle="tooltip"]').tooltip();
	}
	/*
	=======================================================================
	Pretty Photo Script Script
	=======================================================================
	*/
	if($("a[data-rel^='prettyPhoto']").length){
		$("a[data-rel^='prettyPhoto']").prettyPhoto();
	}
	/*
	============================================================== 
	DL Responsive Menu
	============================================================== 
	*/
	if(typeof($.fn.dlmenu) === 'function'){
		$('#kode-responsive-navigation').each(function(){
			$(this).find('.dl-submenu').each(function(){
				if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') !== '#' ){
					var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
					parent_nav.append($(this).siblings('a').clone());

					$(this).prepend(parent_nav);
				}
			});
			$(this).dlmenu();
		});
	}
	/*
	==============================================================
	Main Banner SLIDER Script Start
	==============================================================
	*/
	if($('.main-slider').length){
		$('.main-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: false,
			asNavFor: '.main-slider-nav'
		});
	}
	if($('.main-slider-nav').length){
		$('.main-slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.main-slider',
			dots: false,
			vertical: true,
			centerMode: true,
			focusOnSelect: true,
			arrows: true,
			autoplay: false
		});
	}
	/*
	==============================================================
	TEAM SLIDER Script Start
	==============================================================
	*/
	if($('.team-slider').length){
		$('.team-slider').slick({
			dots: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 1000,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
	}
	/*
	==============================================================
	Causes SLIDER  Script Start
	==============================================================
	*/
	if($('.causes-slider').length){
		$('.causes-slider').slick({
			dots: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	}
	/*
	==============================================================
	Testimonial SLIDER SCRIPT START
	==============================================================
	*/
	if($('.testimonial-thumb-contant').length){
		$('.testimonial-thumb-contant').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: false,
			asNavFor: '.testimonial-thumb-nav'
		});
	}
	if($('.testimonial-thumb-nav').length){
		$('.testimonial-thumb-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.testimonial-thumb-contant',
			dots: false,
			vertical: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: true,
			autoplay: false
		});
	}
	/*
	==============================================================
	Tab Slide Effect SCRIPT START
	==============================================================
	*/
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {    
		var target = $(this).attr('href');  
		$(target).css('left','-'+$(window).width()+'px');   
		var left = $(target).offset().left;
		$(target).css({left:left}).animate({"left":"0px"}, "10");
	})

	/*
	==============================================================
	Related Post SLIDER Script Start
	==============================================================
	*/
	if($('.relatedpost-slider').length){
		$('.relatedpost-slider').slick({
			dots: true,
			autoplay: false,
			arrows: true,
			autoplaySpeed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	}
	/*
	==============================================================
	BRAND SLIDER  SCRIPT START
	==============================================================
	*/
	if($('.brand_slider').length){
		$('.brand_slider').slick({
			dots: false,
			autoplay: true,
			arrows:false,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	}
	/*
	==============================================================
	Masonry Filterable Script Start
	==============================================================
	*/
	if($('#filterable-item-holder-1').length){
		jQuery(window).on('load',function($) {
			var filter_container = jQuery('#filterable-item-holder-1');
			filter_container.children().css('position','relative'); 
			filter_container.masonry({
				singleMode: true,
				itemSelector: '.filterable-item:not(.hide)',
				animate: true,
				animationOptions:{ duration: 800, queue: false }
			}); 
			jQuery(window).resize(function(){
				var temp_width =  filter_container.children().filter(':first').width();
				filter_container.masonry({
					columnWidth: temp_width,
					singleMode: true,
					itemSelector: '.filterable-item:not(.hide)',
					animate: true,
					animationOptions:{ duration: 800, queue: false }
				});   
			}); 
			jQuery('ul#filterable-item-filter-1 a').on('click',function(e){ 
				jQuery(this).addClass("active");
				jQuery(this).parents("li").siblings().children("a").removeClass("active");
				e.preventDefault();

				var select_filter = jQuery(this).attr('data-value');

				if( select_filter === "All" || jQuery(this).parent().index() === 0 ){   
					filter_container.children().each(function(){
						if( jQuery(this).hasClass('hide') ){
							jQuery(this).removeClass('hide');
							jQuery(this).fadeIn();
						}
					});
				}else{
					filter_container.children().not('.' + select_filter).each(function(){
						if( !jQuery(this).hasClass('hide') ){
							jQuery(this).addClass('hide');
							jQuery(this).fadeOut();
						}
					});
					filter_container.children('.' + select_filter).each(function(){
						if( jQuery(this).hasClass('hide') ){
							jQuery(this).removeClass('hide');
							jQuery(this).fadeIn();
						}
					});
				}

				filter_container.masonry(); 

			});
		});
	}
	/*
	============================================================== 
	Community Forum  Menu Script Start
	============================================================== 
	*/
	if(typeof($.fn.dlmenu) === 'function'){
		$('#community-forum-menu').each(function(){
			$(this).find('.dl-submenu').each(function(){
				if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') !== '#' ){
					var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
					parent_nav.append($(this).siblings('a').clone());

					$(this).prepend(parent_nav);
				}
			});
			$(this).dlmenu();
		});
	}
	/*
	==============================================================
	PROGRESS BAR Script Start
	============================================================== 
	*/
	if($('[data-toggle="tooltip"].popOver').length){
		$('[data-toggle="tooltip"].popOver').tooltip({trigger: 'manual'}).tooltip('show');
	}
	/*
	==============================================================
	Toggle
	==============================================================
	*/
	if($('.social-btn1').length){
		$('.social-btn1').on('click', function() {
			$parent_box = $(this).closest('.campaing-social');
			$parent_box.siblings().find('.kode-social-link').slideUp();
			$parent_box.find('.kode-social-link').slideToggle(500, 'swing');
		});
	}
	/* 
	==============================================================
	Blog Full Slider Script Start
	============================================================== 
	*/
	if($('.blog-full-slider').length){
		$('.blog-full-slider').slick({
			fade: true,
			dots: true
		});
	}
	/* 
	==============================================================
	Widget Testimonial Slider Script Start
	============================================================== 
	*/
	if($('.widget-testimonilal-slider').length){
		$('.widget-testimonilal-slider').slick({
			arrows:false,
			dots: true,
			fade: true
		});
	}
	/* 
	==============================================================
	Slide Show Slider Script Start
	============================================================== 
	*/
	if($('.widget-slideshow-slider').length){
		$('.widget-slideshow-slider').slick({
			arrows:true
		});
	}
	/* 
	==============================================================
	Accordian Script Start
	============================================================== 
	*/
	if($('.accordion').length){
		//custom animation for open/close
		$.fn.slideFadeToggle = function(speed, easing, callback) {
			return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};

		$('.accordion').accordion({
			defaultOpen: 'section1',
			cookieName: 'nav',
			speed: 'slow',
			animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
				elem.next().stop(true, true).slideFadeToggle(opts.speed);
			},
			animateClose: function (elem, opts) { //replace the standard slideDown with custom function
				elem.next().stop(true, true).slideFadeToggle(opts.speed);
			}
		});
	}

	/* 
	==============================================================
	Blog Full Slider Script Start
	============================================================== 
	*/
	if($('.meet-team-slider').length){
		$('.meet-team-slider').slick({
			fade: true,
			arrows:false,
			dots: true
		});
	}

	/* 
	==============================================================
	Fancy Count Down Script Start
	============================================================== 
	*/
	if($('.fancy-countdown').length){
		$('.fancy-countdown').final_countdown({
			'start': 1362139200,
			'end': 1388461320,
			'now': 1387461319        
		});
	}
	/* 
	==============================================================
	Donation Progress Script Start
	============================================================== 
	*/
	function move() {
		var elem = document.getElementById("myBar");   
		var width = 0;
		var id = setInterval(frame, 20);
		function frame() {
			if (width >= 1) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
				elem.innerHTML = width * 1  + '%';
			}
		}
	}
	function move2() {
		var elem = document.getElementById("myBar");   
		var width = 1;
		var id = setInterval(frame, 20);
		function frame() {
			if (width >= 19) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
				elem.innerHTML = width * 1  + '%';
			}
		}
	}
	function move3() {
		var elem = document.getElementById("myBar");   
		var width = 19;
		var id = setInterval(frame, 20);
		function frame() {
			if (width >= 39) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
				elem.innerHTML = width * 1  + '%';
			}
		}
	}
	function move4() {
		var elem = document.getElementById("myBar");   
		var width = 39;
		var id = setInterval(frame, 20);
		function frame() {
			if (width >= 58) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
				elem.innerHTML = width * 1  + '%';
			}
		}
	}
	function move5() {
		var elem = document.getElementById("myBar");   
		var width = 58;
		var id = setInterval(frame, 20);
		function frame() {
			if (width >= 78) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
				elem.innerHTML = width * 1  + '%';
			}
		}
	}
	function move6() {
		var elem = document.getElementById("myBar");   
		var width = 78;
		var id = setInterval(frame, 20);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
				elem.innerHTML = width * 1  + '%';
			}
		}
	}



	/* 
	==============================================================
	jPlayer playlist toogle
	============================================================== 
	*/
	$("#jp-playlist-icon").on('click',function(){
		$("#jp-playlist").slideToggle();
	});
	$("#jp-playlist-icon2").on('click',function(){
		$("#jp-playlist2").slideToggle();
	});

	/*
	==============================================================
	Testimonial SLIDER SCRIPT START
	==============================================================
	*/
	if($('.event-slider').length){
		$('.event-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: false,
			asNavFor: '.event-slider-nav'
		});
	}
	if($('.event-slider-nav').length){
		$('.event-slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.event-slider',
			dots: false,
			vertical: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: true,
			autoplay: false
		});
	}




	/*
	==============================================================
	COUNTDOWN  Script Start
	==============================================================
	*/
	if($('#bdha-countdown').length){
		$('#bdha-countdown').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
	}  
	if($('.event-countdown9').length){
		$('.event-countdown9').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
	}  
	if($('#campaing-countdown2').length){
		$('#campaing-countdown2').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
	}  

	if($('.event-count-down').length){
		$('.event-count-down').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
	}  

	if($('#bdha-countdown').length){
		$('#bdha-countdown').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
	}  
});
/*
==============================================================
Google Map Function
==============================================================
*/
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -33.8688, lng: 151.2195},
		zoom: 13,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
	});
	var input = document.getElementById('searchInput');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);

	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
		map: map,
		anchorPoint: new google.maps.Point(0, -29)
	});

	autocomplete.addListener('place_changed', function() {
		infowindow.close();
		marker.setVisible(false);
		var place = autocomplete.getPlace();
		if (!place.geometry) {
			window.alert("Autocomplete's returned place contains no geometry");
			return;
		}

		// If the place has a geometry, then present it on a map.
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);
		}
		marker.setIcon(({
			url: place.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(35, 35)
		}));
		marker.setPosition(place.geometry.location);
		marker.setVisible(true);

		var address = '';
		if (place.address_components) {
			address = [
				(place.address_components[0] && place.address_components[0].short_name || ''),
				(place.address_components[1] && place.address_components[1].short_name || ''),
				(place.address_components[2] && place.address_components[2].short_name || '')
			].join(' ');
		}

		infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
		infowindow.open(map, marker);

		//Location details
		for (var i = 0; i < place.address_components.length; i++) {
			if(place.address_components[i].types[0] == 'postal_code'){
				document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
			}
			if(place.address_components[i].types[0] == 'country'){
				document.getElementById('country').innerHTML = place.address_components[i].long_name;
			}
		}
		document.getElementById('location').innerHTML = place.formatted_address;
		document.getElementById('lat').innerHTML = place.geometry.location.lat();
		document.getElementById('lon').innerHTML = place.geometry.location.lng();
	});
}