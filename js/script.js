$(function(){
            /*$('a.smooth').click(function(){
                console.log("SMOOTH BEGIN");
                var speed = 1000;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $("html, body").animate({scrollTop:position}, speed, "swing");
                console.log("SMOOTH END");
            });*/

	   $(".menuLink").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
		});

  });