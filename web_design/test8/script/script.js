$('.mainmenu li').mouseover(function(){
    $(this).children('.submenu').stop().slideDown(800);
})
$('.mainmenu li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp(800);
})

$('#main1, #sub1').mouseover(function(){
    $('#main1').css({"background-color":"rgb(48,20,255)"});
    $('#main1').css({"color":"#fff"});
    $('#sub1').css({"background-color":"#fff"});
    $('#sub1').css({"color":"#000"});
})
$('#main1, #sub1').mouseleave(function(){
    $('#main1').css({"background-color":"rgba(0,228,255,0.1)"});
    $('#main1').css({"color":"#000"});
    $('#sub1').css({"background-color":"#fff"});
    $('#sub1').css({"color":"#000"});
})

$('#main2, #sub2').mouseover(function(){
    $('#main2').css({"background-color":"rgb(48,20,255)"});
    $('#main2').css({"color":"#fff"});
    $('#sub2').css({"background-color":"#fff"});
    $('#sub2').css({"color":"#000"});
})
$('#main2, #sub2').mouseleave(function(){
    $('#main2').css({"background-color":"rgba(0,228,255,0.1)"});
    $('#main2').css({"color":"#000"});
    $('#sub2').css({"background-color":"#fff"});
    $('#sub2').css({"color":"#000"});
})

$('#main3, #sub3').mouseover(function(){
    $('#main3').css({"background-color":"rgb(48,20,255)"});
    $('#main3').css({"color":"#fff"});
    $('#sub3').css({"background-color":"#fff"});
    $('#sub3').css({"color":"#000"});
})
$('#main3, #sub3').mouseleave(function(){
    $('#main3').css({"background-color":"rgba(0,228,255,0.1)"});
    $('#main3').css({"color":"#000"});
    $('#sub3').css({"background-color":"#fff"});
    $('#sub3').css({"color":"#000"});
})

$('#main4, #sub4').mouseover(function(){
    $('#main4').css({"background-color":"rgb(48,20,255)"});
    $('#main4').css({"color":"#fff"});
    $('#sub4').css({"background-color":"#fff"});
    $('#sub4').css({"color":"#000"});
})
$('#main4, #sub4').mouseleave(function(){
    $('#main4').css({"background-color":"rgba(0,228,255,0.1)"});
    $('#main4').css({"color":"#000"});
    $('#sub4').css({"background-color":"#fff"});
    $('#sub4').css({"color":"#000"});
})


$('.imgbox li:first').siblings().hide();

var img = 3;
var i = 0;
var j = 2;
function fade(){
    i = (i+1)%img;
    j = (j+1)%img;
    
    $('.imgbox li').eq(j).fadeOut(2000);
    $('.imgbox li').eq(i).fadeIn(2000);
};

setInterval(function(){fade()},2000);

$('.noti').click(function(){
    $('.noti').css({"background-color":"rgb(48,20,255)"});
    $('.noti').css({"color":"#fff"});
    $('.gall').css({"background-color":"#fff"});
    $('.gall').css({"color":"#222328"});
    $('.notibox').show();
    $('.gallbox').hide();
})
$('.gall').click(function(){
    $('.gall').css({"background-color":"rgb(48,20,255)"});
    $('.gall').css({"color":"#fff"});
    $('.noti').css({"background-color":"#fff"});
    $('.noti').css({"color":"#222328"});
    $('.gallbox').show();
    $('.notibox').hide();
})

$('.popup').click(function(){
    $('.modal').show();
})
$('.modal button').click(function(){
    $('.modal').hide();
})