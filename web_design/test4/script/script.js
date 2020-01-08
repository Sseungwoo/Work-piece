$('#main1, #sub1').mouseover(function(){
    $('#sub1').stop().slideDown();
    $('#main1').css({"background-color":"rgb(236,136,75)"});
    $('#main1').css({"color":"#fff"});
})
$('#main1, #sub1').mouseleave(function(){
    $('#sub1').stop().slideUp();
    $('#main1').css({"background-color":"rgb(249,222,39)"});
    $('#main1').css({"color":"#000"});
})

$('#main2, #sub2').mouseover(function(){
    $('#sub2').stop().slideDown();
    $('#main2').css({"background-color":"rgb(236,136,75)"});
    $('#main2').css({"color":"#fff"});
})
$('#main2, #sub2').mouseleave(function(){
    $('#sub2').stop().slideUp();
    $('#main2').css({"background-color":"rgb(249,222,39)"});
    $('#main2').css({"color":"#000"});
})

$('#main3, #sub3').mouseover(function(){
    $('#sub3').stop().slideDown();
    $('#main3').css({"background-color":"rgb(236,136,75)"});
    $('#main3').css({"color":"#fff"});
})
$('#main3, #sub3').mouseleave(function(){
    $('#sub3').stop().slideUp();
    $('#main3').css({"background-color":"rgb(249,222,39)"});
    $('#main3').css({"color":"#000"});
})

$('#main4, #sub4').mouseover(function(){
    $('#sub4').stop().slideDown();
    $('#main4').css({"background-color":"rgb(236,136,75)"});
    $('#main4').css({"color":"#fff"});
})
$('#main4, #sub4').mouseleave(function(){
    $('#sub4').stop().slideUp();
    $('#main4').css({"background-color":"rgb(249,222,39)"});
    $('#main4').css({"color":"#000"});
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
    $('.imgbox').stop().animate({"margin-left":"-800px"},2500);
    if(count>1){
        $('.imgbox li:first').remove();
        $('.imgbox ul').append('<li><img src="image/image'+i+'.png" alt="no"></li>');
    }
}

setInterval(function(){slide()},2500);

$('.popup').click(function(){
    $('.modal').show();
})
$('.modal button').click(function(){
    $('.modal').hide();
})