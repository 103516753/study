let index = 0;
$('.prev').click(function(){
    index--;
    if(index<0){
        index = 1;
        $('.carouselImgs').css({left:$('.carouselImgs img').width()*-2})
    }
    $('.carouselImgs').stop(true).animate({left:$('.carouselImgs img').width()*-index});

});

$('.next').click(function(){
    index++;
    if(index>2){
        index = 1;
        $('.carouselImgs').css({left:$('.carouselImgs img').width()*-0})
    }
    $('.carouselImgs').stop(true).animate({left:$('.carouselImgs img').width()*-index});

});

$(window).resize(function(){
    $('.carouselImgs img').width('100%')
});