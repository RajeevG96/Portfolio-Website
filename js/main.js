$(document).ready(function(){
   
    $("#seeMore").click(function(){
       $("#primaryContent").hide(600);
        $("#extraContent").show(600);
    });
    
    $("#back").click(function(){
        $("#extraContent").hide(600);
         $("#primaryContent").show(600);
    });
    
    $(".dropdown").click(function(){
        $(".nav-container").slideDown(200);
         $(".fa-level-down").hide();
          $(".fa-level-up").show();
    });
    
//    $(".fa-level-up").click(function(){
//        $(".nav-container").hide();
//         $(".fa-level-up").hide();
//          $(".fa-level-down").show();
//    });
    
    $(".nav-container").on("click", function(e){
    e.stopPropagation();
    $(".nav-container:visible", $(this).siblings()).slideUp("fast");
    $(".nav-container", this).slideDown();
});
    
    $(document).click(function(){
        $(".nav-container").slideUp(200);
    });
    
});