var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  videoId: 'HX5l5DxmmBw',
  height: '390',
  width: '640',
  playerVars: {
		'autoplay': 0,
		'controls': 0,
		'autohide': 0,
		'wmode': 'opaque',
		'showinfo': 0,
		'loop': 1,
		'mute': 1,
		'modestbranding': 1,
		'playsinline': 1,
		'rel':0
	},
  events: {
	'onReady': onPlayerReady,
	'onStateChange': onPlayerStateChange
  }
  
});
}
document.getElementById("player").setAttribute('webkit-playsinline','1');
document.getElementById("player").setAttribute('muted','1');
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
player.mute();
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
 var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
function stopVideo() {
player.stopVideo();
}


$(document).ready(function(){
  /* owl carousel */
 

  var owl = $('#musique_owl');
    owl.owlCarousel({
        items:4,
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        nav: false,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:3.5
            },
            600:{
                items:3.5
            },
            1000:{
                items:3.5
            }
        }
    });

    var owl2 = $('#video_owl');
    owl2.owlCarousel({
    items:4,
    loop:true,
    autoplay:false,
    autoplayTimeout:2000,
    nav: false,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:3.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:3.5
        }
    }
    });

    var owl3 = $('#event_owl');
    owl3.owlCarousel({
    items:4,
    loop:true,
    autoplay:false,
    autoplayTimeout:2000,
    nav: false,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:3.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:3.5
        }
    }
    });
	
	if($(window).width() > 768) {
		$('#event_owl').on('mouseover',function(e){
			owl.trigger('play.owl.autoplay');
		})
		$('#event_owl').on('mouseleave',function(e){
			owl.trigger('stop.owl.autoplay');
		})
		$('#video_owl').on('mouseover',function(e){
			owl.trigger('play.owl.autoplay');
		})
		$('#video_owl').on('mouseleave',function(e){
			owl.trigger('stop.owl.autoplay');
		})
		$('#musique_owl').on('mouseover',function(e){
			owl.trigger('play.owl.autoplay');
		})
		$('#musique_owl').on('mouseleave',function(e){
			owl.trigger('stop.owl.autoplay');
		})
	};
/* end owl carousel*/


  $(".close-list").click(function(){
    $("#modalForm").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $(".form-button .cancel").click(function(){
    $("#modalForm").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $(".close-modal").click(function(){
    $("#modalPrivacy").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $("#modalPrivacy .btn-primary").click(function(){
    $("#modalPrivacy").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $(".form-button .send").click(function(){
    $(".message").addClass("show");
  });


// swipe function
  'use strict';

  var $swipeTabsContainer = $('.menu-tabs'),
    $swipeTabs = $('.menu-tab'),
    $swipeTabsContentContainer = $('.swipe-tabs-container'),
    currentIndex = 0,
    activeTabClassName = 'active-tab';

  $swipeTabsContainer.on('init', function(event, slick) {
    $swipeTabsContentContainer.removeClass('invisible');
    $swipeTabsContainer.removeClass('invisible');

    currentIndex = slick.getCurrent();
    $swipeTabs.removeClass(activeTabClassName);
        $('.menu-tab[data-index=' + currentIndex + ']').addClass(activeTabClassName);
  });

  

  $swipeTabsContentContainer.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    draggable: false,
    touchThreshold: 10
  });


	
	
  $swipeTabs.on('click', function(event) {
        // gets index of clicked tab
        currentIndex = $(this).data('index');
        $swipeTabs.removeClass(activeTabClassName);
        $('.menu-tab[data-index=' + currentIndex +']').addClass(activeTabClassName);
		if  (currentIndex == 3 ) {			
			$('#menu_tabs').animate({"margin-left" : "-25%"},200, function() {
				var activeWidth = $('.menu-tab.active-tab').innerWidth();
				var itemPos = $('.menu-tab.active-tab').position();
		  $(".menu-selector").css({
			"left":itemPos.left + "px", 
			"width": activeWidth + 10 + "px"
		  });
			});
		} else if  (currentIndex == 1 ) {		
			$('#menu_tabs').animate({"margin-left" : "0px"},200, function() {
				var activeWidth = $('.menu-tab.active-tab').innerWidth();
				var itemPos = $('.menu-tab.active-tab').position();
		  $(".menu-selector").css({
			"left":itemPos.left + "px", 
			"width": activeWidth + 10 + "px"
		  });
			});
		} else {			
			var activeWidth = $('.menu-tab.active-tab').innerWidth();
			var itemPos = $('.menu-tab.active-tab').position();
		  $(".menu-selector").css({
			"left":itemPos.left + "px", 
			"width": activeWidth + 10 + "px"
		  });
		}
        $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
    });
	
    //initializes slick navigation tabs swipe handler
    $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
      currentIndex = $(this).slick('slickCurrentSlide');
    $swipeTabs.removeClass(activeTabClassName);
	
    $('.menu-tab[data-index=' + currentIndex + ']').addClass(activeTabClassName);
		
		if  (currentIndex == 3 ) {			
			$('#menu_tabs').animate({"margin-left" : "-25%"},200, function() {
				var activeWidth = $('.menu-tab.active-tab').innerWidth();
				var itemPos = $('.menu-tab.active-tab').position();
			  $(".menu-selector").css({
				"left":itemPos.left + "px", 
				"width": activeWidth + 10 + "px"
			  });
			});
		} else if  (currentIndex == 1 ) {		
			$('#menu_tabs').animate({"margin-left" : "0px"},200, function() {
				var activeWidth = $('.menu-tab.active-tab').innerWidth();
				var itemPos = $('.menu-tab.active-tab').position();
			  $(".menu-selector").css({
				"left":itemPos.left + "px", 
				"width": activeWidth + 10 + "px"
			  });
			});
		} else {			
			var activeWidth = $('.menu-tab.active-tab').innerWidth();
			var itemPos = $('.menu-tab.active-tab').position();
			  $(".menu-selector").css({
				"left":itemPos.left + "px", 
				"width": activeWidth + 10 + "px"
			  });
		}
	 
  }); 
  
 // Prevent slick from swiping when swiping on owl carousel
 
		$('#event_owl').on('touchmove',function(e){	
		  $swipeTabsContentContainer.slick("slickSetOption", "swipe", false);
		  $swipeTabsContentContainer.slick("slickSetOption", "touchMove", false);
		});
		$('#event_owl').on('touchend',function(e){	
		  $swipeTabsContentContainer.slick("slickSetOption", "swipe", true);
		  $swipeTabsContentContainer.slick("slickSetOption", "touchMove", true);
		});
		 
		$('#video_owl').on('touchmove',function(e){	
		  $swipeTabsContentContainer.slick("slickSetOption", "swipe", false);
		  $swipeTabsContentContainer.slick("slickSetOption", "touchMove", false);
		});
		$('#video_owl').on('touchend',function(e){	
		  $swipeTabsContentContainer.slick("slickSetOption", "swipe", true);
		  $swipeTabsContentContainer.slick("slickSetOption", "touchMove", true);
		});		
		 
		$('#musique_owl').on('touchmove',function(e){	
		  $swipeTabsContentContainer.slick("slickSetOption", "swipe", false);
		  $swipeTabsContentContainer.slick("slickSetOption", "touchMove", false);
		});
		$('#musique_owl').on('touchend',function(e){	
		  $swipeTabsContentContainer.slick("slickSetOption", "swipe", true);
		  $swipeTabsContentContainer.slick("slickSetOption", "touchMove", true);
		});
});

$(window).on('load', function() {
	$(document).ready(function() {

		var playing = false;

		bgSound = document.getElementById("bgSound");
	   
	   // bgSound.volume = 0.1;

		$('a#playBtn').click(function() {
			$(this).toggleClass("stopBtn");

			if (playing == false) {
				//document.getElementById('bgSound').play();
				playing = true; 

			} else {
				//document.getElementById('bgSound').pause();
				playing = false; 
			}


		});
	});
});
$(document).ready(function() {
	var videoPlaying = false;
	$('.slick-slider').on('afterChange', function(event, slick, currentSlide){
	  if (currentSlide != 1) { 
		$('#background-img').fadeIn(200);
		function onPlayerReady(event) {
			event.target.pauseVideo();
			player.mute();
		}
		videoPlaying = false; 
	  } else {
		$('#background-img').fadeOut(1500);
		
		function onPlayerReady(event) {
			event.target.playVideo();
			player.mute();
		}
		
		videoPlaying = true;	
	  }
	});	

	

	
	var tabs = $('.menu-tabs');
	var selector = $('.menu-tabs').find('.menu-tab').length;
	//var selector = $(".tabs").find(".menu-selector");
	var activeItem = tabs.find('.menu-tab.active-tab');
	var activeWidth = activeItem.innerWidth();
	$(".menu-selector").css({
	  "left": activeItem.position.left + "px", 
	  "width": activeWidth + 10 + "px"
	});
	
	
});
