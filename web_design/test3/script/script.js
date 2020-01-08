$('.mainmenu, .submenu').mouseover(function(){
    $('.submenu').stop().slideDown();
})
$('.mainmenu, .submenu').mouseleave(function(){
    $('.submenu').stop().slideUp();
})

$("#sub1, #main1").mouseover(function(){
    $('#main1').css({"background-color":"#0076be"});
    $('#main1').css({"color":"#fff"});
    $('#main2, #main3, #main4').css({"background-color":"#fff"});
    $('#main2, #main3, #main4').css({"color":"#333"});
})
$("#sub1").mouseleave(function(){
    $('#main1').css({"background-color":"#fff"});
    $('#main1').css({"color":"#333"});
})

$("#sub2, #main2").mouseover(function(){
    $('#main2').css({"background-color":"#0076be"});
    $('#main2').css({"color":"#fff"});
    $('#main1, #main3, #main4').css({"background-color":"#fff"});
    $('#main1, #main3, #main4').css({"color":"#333"});
})
$("#sub2").mouseleave(function(){
    $('#main2').css({"background-color":"#fff"});
    $('#main2').css({"color":"#333"});
})

$("#sub3, #main3").mouseover(function(){
    $('#main3').css({"background-color":"#0076be"});
    $('#main3').css({"color":"#fff"});
    $('#main1, #main2, #main4').css({"background-color":"#fff"});
    $('#main1, #main2, #main4').css({"color":"#333"});
})
$("#sub3").mouseleave(function(){
    $('#main3').css({"background-color":"#fff"});
    $('#main3').css({"color":"#333"});
})

$("#sub4, #main4").mouseover(function(){
    $('#main4').css({"background-color":"#0076be"});
    $('#main4').css({"color":"#fff"});
    $('#main1, #main2, #main3').css({"background-color":"#fff"});
    $('#main1, #main2, #main3').css({"color":"#333"});
})
$("#sub4").mouseleave(function(){
    $('#main4').css({"background-color":"#fff"});
    $('#main4').css({"color":"#333"});
})

var count = 0;
var img = 3;
var i = 2;

function slide(){
    count = count + 1;
    i = (i+1)%img;
    if(i==0){
        i = img;
    }
    $('.imgbox').css({"margin-left":"0px"});
    $('.imgbox').stop().animate({"margin-left":"-1200px"},3000);
    if(count>1){
    $('.imgbox li:first').remove();
    $('.imgbox').append('<li><img src="image/image' + i + '.png" alt="no"></li>');
    }
}

setInterval(function(){slide()},3000);


$('.noti').click(function(){
    $('.noti').css({"background-color":"#0076be"});
    $('.noti').css({"color":"#fff"});
    $('.gall').css({"background-color":"#fff"});
    $('.gall').css({"color":"#333"});
    $('.notibox').show();
    $('.gallbox').hide();
})

$('.gall').click(function(){
    $('.gall').css({"background-color":"#0076be"});
    $('.gall').css({"color":"#fff"});
    $('.noti').css({"background-color":"#fff"});
    $('.noti').css({"color":"#333"});
    $('.notibox').hide();
    $('.gallbox').show();
})

$('.popup').click(function(){
    $('.modal').show();
})

$('.modal button').click(function(){
    $('.modal').hide();
})