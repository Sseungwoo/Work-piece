$('.mainmenu li').mouseover(function(){
    $(this).children('.submenu').stop().slideDown();
})
$('.mainmenu li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp();
})


$('.mainimage img').eq(0).siblings().hide();

var img = 3;
var i = 2;
var j = 0;
function fade(){
    i = (i+1)%img;
    j = (j+1)%img;
    $('.mainimage img').eq(i).fadeOut(2500);
    $('.mainimage img').eq(j).fadeIn(2500);
}

setInterval(function(){fade()},2500);

$('.popup').click(function(){
    $('.modal').show();
})
$('.modal button').click(function(){
    $('.modal').hide();
})