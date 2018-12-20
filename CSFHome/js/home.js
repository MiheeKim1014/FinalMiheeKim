$(document).ready(function() {

	
        $(".openmenu").click(function(){
            $(".menu").fadeIn();
        })

        $(".closemenu").click(function(){
            $(".menu").fadeOut();
        })

        function elementInView(elem){
	  return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
	};

	$(window).scroll(function(){
	
	  if (elementInView($('.first'))){
	  	//$('.first').addClass('showAnimate')
	  		console.log("inside");

	  }
});

});
