(function($){
	$.fn.almy = function(params){

        //On définit nos paramètres par défaut
        var defauts = $.extend({
        	width        : '400px',
        	widthImage   : '200px',
            running: true,
            paused: false,
            pauseTime: 3000,
            pauseOnHover: true
        }, params);  
        var category = Array();
        
        return this.each(function(){
                $(this).find("a").each(function() {
                    if((typeof $(this).attr("almy-cat") !== "undefined")) {
                        var cat = $(this).attr("almy-cat").split(";");
                        for (var i in a = cat) {
                            if(category.indexOf(a[i]) === -1)
                                category.push(a[i]);
                        }
                    }
                });
                var uiCat = "";
                for(var i=0; i<category.length; i++) {
                    uiCat += '<div>'+category[i]+'</div>';
                }
                $(this).html('<div class="almyListCat">'+uiCat+'</div>' + $(this).html());
                
        	$(this).css({
        		width: defauts.width,
                position: 'relative'
        	});

            var $widthImageNext = $(this).find('#categoriesMiddle img:gt(0)').width(); // stock dans une variable la width de l'image qui arrive
                $(this).find('.imgContainer').css({ // modifie la width de la div contenant l'image pour que l'image reste bien au centre
                    width: $widthImageNext,
                    'text-align': 'center'
                }, 500);
            
        	$(this).find('img').css({
        		'width': defauts.widthImage,
                        'display': 'inline-block',
                        'vertical-align': 'text-top'
        	})
         //    .click(function(){
        	// 	$(this).animate({
        	// 		height: '0px',
        	// 		width: '0px'
        	// 	}, 500);
        	// })
            ;
            $(this).find('#categoriesMiddle img:gt(0)').hide();// on cache toutes les images sauf la premiere

// a commenter

            var timer = 0;

            // mise en route auto du slider
            if(defauts.running && !defauts.paused){
               timer = setInterval(function() {
               slideSuivant();
                }, defauts.pauseTime); 
            }



             if(defauts.pauseOnHover){
                 $(this).find('#categoriesMiddle img').hover(function(){
                 defauts.paused = true;
                 clearInterval(timer);
                timer = '';
             }, function(){
                    defauts.paused = false;
                    if(timer == '' && !defauts.paused){
                       timer = setInterval(function() {
                       slideSuivant();
                        }, defauts.pauseTime); 
                    }
                });
             }        

// end a commenter


            // au clic sur le bouton next
            $(this).find('.navNext').click(function(){ // au clic sur next
                slideSuivant();
                return false;
            });

            // au clic sur le bouton précédent
             $(this).find('.navPrev').click(function(){ // au clic sur next
               slidePrecedent();
                return false;
            });

        	$(this).find('a').click(function(){
        		return false;
        	});
		});	

        function slideSuivant(){
            var $imageSuivante = $('#categoriesMiddle img:visible').next('img'); // on stock la valeur de l'image suivante dans une variable
            if($imageSuivante.length<1) $imageSuivante = $("#categoriesMiddle img:first"); // on test si on est pas à la fin de la liste d'image et au cas ou on retourne à la première
            var $widthImageNext = $('#categoriesMiddle img:visible').width(); // stock dans une variable la width de l'image qui arrive
            $('.imgContainer').animate({ // modifie la width de la div contenant l'image pour que l'image reste bien au centre
                width: $widthImageNext,
                'text-align': 'center'
            }, 500);
            $("#categoriesMiddle img:visible").stop().fadeOut('slow'); // on cache l'image actuelle
            $imageSuivante.stop().fadeIn('slow'); // on affiche la nouvelle
            return true;
        }

        function slidePrecedent(){
            var $imageSuivante = $('#categoriesMiddle img:visible').next('img'); // on stock la valeur de l'image suivante dans une variable
            if($imageSuivante.length<1) $imageSuivante = $("#categoriesMiddle img:first"); // on test si on est pas à la fin de la liste d'image et au cas ou on retourne à la première
            var $widthImageNext = $('#categoriesMiddle img:visible').width(); // stock dans une variable la width de l'image qui arrive
            $('.imgContainer').animate({ // modifie la width de la div contenant l'image pour que l'image reste bien au centre
                width: $widthImageNext,
                'text-align': 'center'
            }, 500);
            $("#categoriesMiddle img:visible").stop().fadeOut('slow'); // on cache l'image actuelle
            $imageSuivante.stop().fadeIn('slow'); // on affiche la nouvelle
            return true;
        }				   
	};
})(jQuery);
