$(document).ready(function(){
    $('.TituloJQ').each(function() {
        var elem = $(this);
        setInterval(function() {
            if (elem.css('visibility') == 'hidden') {
                elem.css('visibility', 'visible');

            } else {
                elem.css('visibility', 'hidden');
            }    
        }, 700);
    });
   });

   $(document).ready(function(){
       $('.ContenedorIMG').hide();
       $('.ContenedorIMG').slideDown(1000);
   });
