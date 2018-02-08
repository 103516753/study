let index = 0;
$('.smImgBoxList li').click(function(){
    index = $(this).index();
    $(this).addClass('borderActive').siblings().removeClass('borderActive');
    $('.imgsBox').animate({left:-index*$('.imgsBox').find('.widthImg').width()})
})
$('.next').click(function(){
    index++;
    if(index>4){
        index = 1;
        $('.imgsBox').css({left:0})
    }
    if(index>3){
        $('.smImgBoxList li').eq(0).addClass('borderActive').siblings().removeClass('borderActive'); 
    }else{
        $('.smImgBoxList li').eq(index).addClass('borderActive').siblings().removeClass('borderActive');
    }
    $('.imgsBox').stop(true).animate({left:-index*$('.imgsBox').find('.widthImg').width()})
})
$('.prev').click(function(){
    index--;
    if(index<0){
        index = 3;
        $('.imgsBox').css({left:-4*$('.imgsBox').find('.widthImg').width()})
        $('.smImgBoxList li').eq(3).addClass('borderActive').siblings().removeClass('borderActive'); 
    }else{
        $('.smImgBoxList li').eq(index).addClass('borderActive').siblings().removeClass('borderActive');
    }
    $('.imgsBox').stop(true).animate({left:-index*$('.imgsBox').find('.widthImg').width()})
});


// 商品加减
iNum = 1;
$('.goodsAdd').click(function(){
    iNum = $(this).siblings('input').val();
    iNum++;
    $(this).siblings('input').val(iNum)
});
$('.goodsCalc').click(function(){
    iNum = $(this).siblings('input').val(); 
    iNum--;
    if(iNum < 1){
        iNum = 1;
    }
    $(this).siblings('input').val(iNum)
});