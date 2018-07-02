$(function() {
    var arrowHideDelay = 200;
    $(document).ready(function(){
        if($(window).scrollTop() == 0){
            $('a.arrows').removeClass('hidden');
        }
    })
    $('a[href*="#"]:not([href="#"])').click(function(e) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 500);
            e.preventDefault();
        }
        }
    });
    $('a.arrows').click(function() {
        $(this).addClass('hide').delay(arrowHideDelay).dequeue(function(next){
            $(this).addClass("hidden");
        })
    });
});