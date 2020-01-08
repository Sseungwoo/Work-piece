$(document).ready(function(){ 
    var main = $('.bxslider').bxSlider({ 
    mode: 'fade', 
    auto: false,	//자동으로 슬라이드 
    controls : true,	//좌우 화살표	
    autoControls: false,	//stop,play 
    pager:true,	//페이징 
    pause: 3000, 
    autoDelay: 0,	
    slideWidth: 800, 
    speed: 500, 
    stopAutoOnclick:true 
}); 

}); 