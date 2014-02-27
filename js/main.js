$(  
  $('button.close').on("click", function (){
      
          $(".overlay").removeClass("open");   
          $(".overlay").addClass("close");      
      
  }),
    
  $('div.navtg').on("click", function (){
      if($(".overlay").hasClass("close")){        
          $(".overlay").removeClass("close");   
          $(".overlay").addClass("open");      
        }
   })

   // $("ul.projectlist > li:odd").addClass("right"),
   // $("ul.projectlist > li:even").addClass("left") 
)

