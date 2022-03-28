$(document).ready(main);

var contador = 0;

function main() {
    $('.menu-bar').click(funcion() { 
        if (contador == 0) {
             $('nav').animate({
                 left: '0'
             });
             contador =1;
         }
        else {
             $('nav').animate({
                 left: '-100%'
             });
             contador = 0;
        }
    });
    $('.submenu').click(funcion(){
        $(this).children('.children').slideToggle();
    });
}

