
/*====================================*/
/* 	  Authors Custom script Writing	  */
/*====================================*/

"use strict";

$(document).ready(function(){
	$('.banner_slider').bxSlider({
		  infiniteLoop: true,
		  hideControlOnEnd: true,
		  pagerCustom: '#bx-pager',
		  auto:true,
		  nextText: ' ',
		  prevText: ' '
	});
	
	$('.project').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: true,
		slideWidth: 600,
		moveSlides:1,
		minSlides: 1,
		maxSlides: 4,
		pager:false,
		auto:true,
		nextText: ' ',
		prevText: ' '
  });
  
  $('.news').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: true,
		slideWidth: 580,
		moveSlides:1,
		minSlides: 1,
		maxSlides: 2,
		pager:true,
		auto:true,
		nextText: ' ',
		prevText: ' '
  });
  
  $('.clients').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: true,
		moveSlides:1,
		minSlides: 1,
		maxSlides: 6,
		pager:true,
		auto:true,
		nextText: ' ',
		prevText: ' '
  });
  
  $('.happy').bxSlider({
  		pagerCustom: '#bx-pager',
		nextText: ' ',
		prevText: ' ',
		speed:1000,
		auto:true
  
  });
  
  $('.our-team-members').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: true,
		moveSlides:1,
		minSlides: 1,
		maxSlides: 4,
		pager:false,
		auto:true,
		nextText: ' ',
		prevText: ' '
  });
  
   var owl = $("#owl-demo");
     
      owl.owlCarousel({
         
          itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [640, 1],
            [667, 1],
            [1024, 2],
            [1200, 2],
            [1600, 2]
          ],
          navigation : false,
		  pagination : true,
		  
		 
     
      });


}); 



