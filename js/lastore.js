$(document).ready(function() { 
	
	// Drop Down Menu
		var mainMenu = $('#main-menu').superfish({
		//add options here if required
	});
	// Mobile Menu
	// Create the dropdown base
	$("<select />").appendTo("#nav");
      
	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
	}).appendTo("#nav select");
	
	// Populate dropdown with menu items
	$("#main-menu a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#nav select");
	});
	
	// To make dropdown actually work
	$("#nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	
    // SLIDER
      $('.flexslider').flexslider({
        animation: "slide",
      });
	//Carousel Logo
	  $('.carosellogo').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 160,
		itemMargin: 5,
		minItems:1,
		maxItems: 5,
	  });
	$("a.more,a.linkslide").click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 600);
		return false;
	});
	$("a.backtop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 3000);
	});
	// popup
	$("a.showPopup").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		$(".popup").fadeOut();
		var targetID = jQuery(this).attr('href');
		$("#bg-popup").fadeIn();
		$(targetID).fadeIn();
		$(targetID).addClass('visible');
 	    return false;
	});
	$("a.showPopup2").click(function(){
		$(".artist-box").fadeOut();
		$(".popup2").fadeOut();
		var targetID = jQuery(this).attr('href');
		$(targetID).fadeIn();
		$(targetID).addClass('visible');
 	    return false;
	});
	$("a.closePopup,#bg-popup").click(function(){
		$("#bg-popup").fadeOut();
		$(".popup,.popup2").fadeOut();
		$(".artist-box").fadeIn();
   	    return false;
	});
	//POPUP
	$('.showPopups').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	//TAB
	  $(function() {
		$( "#tabs" ).tabs();
	  });
});