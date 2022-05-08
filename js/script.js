

$(function(){
'use strict';
var manu = $('.main_manu').offset().top;
$(window).scroll(function(){
    var fix = $(this).scrollTop();
    if(fix>manu){
        $('.main_manu').addClass('fixxed');
    }
    else{
        $('.main_manu').removeClass('fixxed');

    }
    
});


$('.back_top').click(function(){
    var scrolling = $('html, body').animate({
        scrollTop:0,
    },1000);
});

$(window).scroll(function(){
    var scroll = $(this).scrollTop();
if(scroll>300){
    $('.back_top').fadeIn();
}
else{
    $('.back_top').fadeOut();

}
  
});



});