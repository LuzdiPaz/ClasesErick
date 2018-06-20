$(document).ready(function() {
var scroll = $(window).scrollTop();
$('#posicion').text(scroll);
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    $('#posicion').text(scroll);
    /*Cambia el color del div cuando es distinto a 0*/
    if(scroll!=0){
        $('#div1').css({
            background: '#fff'
        });
    }else{
        $('#div1').css({
            background: '#066DFA'
        });
    }
});
});