$('.mainmenu, .subback').mouseover(function(){
    $('.subback').stop().slideDown();
})

$('.mainmenu, .subback').mouseleave(function(){
    $('.subback').stop().slideUp();
})

$('#sub1, #main1').mouseover(function(){
    $('#main1').css({"background-color":"#00c73c"});
    $('#main1').css({"color":"#fff"});
})
$('#sub1, #main1').mouseleave(function(){
    $('#main1').css({"background-color":"#fff"});
    $('#main1').css({"color":"#333"});
})

$('#sub2, #main2').mouseover(function(){
    $('#main2').css({"background-color":"#00c73c"});
    $('#main2').css({"color":"#fff"});
})
$('#sub2, #main2').mouseleave(function(){
    $('#main2').css({"background-color":"#fff"});
    $('#main2').css({"color":"#333"});
})

$('#sub3, #main3').mouseover(function(){
    $('#main3').css({"background-color":"#00c73c"});
    $('#main3').css({"color":"#fff"});
})
$('#sub3, #main3').mouseleave(function(){
    $('#main3').css({"background-color":"#fff"});
    $('#main3').css({"color":"#333"});
})

$('#sub4, #main4').mouseover(function(){
    $('#main4').css({"background-color":"#00c73c"});
    $('#main4').css({"color":"#fff"});
})
$('#sub4, #main4').mouseleave(function(){
    $('#main4').css({"background-color":"#fff"});
    $('#main4').css({"color":"#333"});
})

var count = 0;
var img = 3;
var i = 2;
function slide(){
    count = count +1;
    i = (i+1)%img;
    if(i==0){
        i = img;
    }
    $('.imgbox').css({"margin-top":"0px"});
    $('.imgbox').stop().animate({"margin-top":"-300px"},3000);
    if(count>1){
        $('.imgbox ul>li:first').remove();
        $('.imgbox ul').append('<li><img src="image/image'+i+'.png" alt="no"></li>');
    }
}

setInterval(function(){slide()},3000);


$('.popup').click(function(){
    $('.modal').show();
})
$('.modal button').click(function(){
    $('.modal').hide();
})