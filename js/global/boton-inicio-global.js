$(document).ready(function(){

    $('.redes-flotantes-arriba').click(function(){ 
        $('body, html').animate({
             scrollTop: '0px' }, 1000); 
        return false; 
    }); 

});