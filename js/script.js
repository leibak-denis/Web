$(document).ready(function(){
    $('.other__item').click(function(event) {
        if($('.other__menu').hasClass('one')){
            $('.other__item').not($(this)).removeClass('active');
            $('.other__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);

    });
});





