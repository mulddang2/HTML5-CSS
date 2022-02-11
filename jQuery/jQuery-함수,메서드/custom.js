$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})