$('.mainmenu>li').mouseover(function(){
    $(this).children('.submenu').stop().slideDown();
});

$('.mainmenu>li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp();
});

var count=0;
var img = 3;
var i = 2;
function slide(){
    count = count + 1;
    i = (i+1)%img;
    if(i==0){
        i = img;
    }
    $('.imgbox').css({"margin-top":"0px"});
    $('.imgbox').stop().animate({"margin-top":"-300px"},3000);
    if(count>1){
        $('.imgbox li:first').remove();
        $('.imgbox').append('<li><img src="image/image' + i + '.png" alt="no"></li>');
    }
}

setInterval(function(){slide();},3000);

$('.popup').click(function(){
    $('.modal').show();
})
$('.modal button').click(function(){
    $('.modal').hide();
})