$(document).ready(function(){
    $("[name='imgDiv']").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');

    });
});