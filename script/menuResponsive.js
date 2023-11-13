$(document).ready(function () {
    $header = $('header');
    $menu   = $('.menuBurger');
    $burger = $('.burger');
    $croix  = $('.croix');

    $menu.click(function () { 
        if($burger.hasClass('visible')){
            $header.css({'transform':'translateX(-100%)'});
        }
        else{
            $header.css({'transform':'translateX(0)'});
        }
        
        $burger.toggleClass('visible');
        $croix.toggleClass('visible');
    });
});