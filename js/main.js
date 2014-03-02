$(  
  $('a.close').on("click", function (){
      
          $(".overlay").removeClass("open");   
          $(".overlay").addClass("close");      
      
  }),
    
  $('div.navtg').on("click", function (){
      if($(".overlay").hasClass("close")){        
          $(".overlay").removeClass("close");   
          $(".overlay").addClass("open");      
        }
   }),

   // $("ul.projectlist > li:odd").addClass("right"),
   // $("ul.projectlist > li:even").addClass("left") 

        /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        })

    })
)

