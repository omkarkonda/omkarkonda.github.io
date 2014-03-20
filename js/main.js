$(  
  $('a.close').on("click", function (){
      
          $(".overlay").removeClass("open");   
          $(".overlay").addClass("close");
         $("body").removeClass("overflow");        
      
  }),
    
  $('div.navtg a').on("click", function (){
      if($(".overlay").hasClass("close")){        
          $(".overlay").removeClass("close");   
          $(".overlay").addClass("open");      
          $("body").addClass("overflow");
        }
   }),

   // $("ul.projectlist > li:odd").addClass("right"),
   // $("ul.projectlist > li:even").addClass("left") 

        /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        
       
    })
);

$(document).ready(function() {
    $('.gallery').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image'
      // other options
    });  
    
    var $container 	= $('#am-container'),
					$imgs		= $container.find('img').hide(),
					totalImgs	= $imgs.length,
					cnt			= 0;
				
				$imgs.each(function(i) {
					var $img	= $(this);
					$('<img/>').load(function() {
						++cnt;
						if( cnt === totalImgs ) {
							$imgs.show();
							$container.montage({
								fillLastRow				: true,
								alternateHeight			: false,
								alternateHeightRange	: {
									min	: 100,
									max	: 150
								},
                                margin : 5
							});
							
							/* 
							 * just for this demo:
							 */
							//$('#overlay').fadeIn(500);
						}
					}).attr('src',$img.attr('src'));
				});	

    $('.hero nav.wide').waypoint('sticky');
    
    
    
    $('nav.mobile .icon').on('click', function(ev){        
              
        $('nav.mobile').toggleClass('bounceInDown animated');        
        $('nav.mobile ul').toggleClass('show');
        
    });
    
    
});

