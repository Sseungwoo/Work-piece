$("#main1").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$("#main1").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});