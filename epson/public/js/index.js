//改变窗口大小
let iWidth = 0;
let index = 0;
iWidth = $(document.body).width();
if(iWidth<780){
        
    // $('.fluidCenter').css({float:'none'})
    // $('.fluidLeft').css({float:'none'})
    // $('.fluidRight').css({float:'none'});


    $('.footerNav').css({width:'50%'}).parent('.footerNavBox').css({'margin-left':'10%','margin-top':'3%'});
    $('.footerNavLine').hide();
    
}else{
    $('.footerNav').css({width:''}).parent('.footerNavBox').css({'margin-left':'','margin-top':''});
    $('.footerNavLine').show();

    $('.fluidCenter').css({float:''})
    $('.fluidLeft').css({float:''})
    $('.fluidRight').css({float:''});
}

if(iWidth<450){
    console.log(iWidth/400*195)
    $('.meunList li').width(iWidth/400*195 + 30)
    $('.meunList li a').width(iWidth/400*195)
}
$(window).resize(function(){
    iWidth = $(document.body).width();
    $('.carouseImgs li').width($(document.body).width());
    $('.carouseImgs li a img').width($(document.body).width());

    $('.hideList li').width($(document.body).width()/9-1);

    // 小轮播图
    $('.smCarouselWindowBox').width(iWidth*0.8);
    $('.smCarouselWindow').width(iWidth*0.8);
    $('.smCarouseImgs li').width(78.7/1057*iWidth);

    if(iWidth<780){
        
        $('.fluidCenter').css({float:'none'})
        $('.fluidLeft').css({float:'none'})
        $('.fluidRight').css({float:'none'});


        $('.footerNav').css({width:'50%'}).parent('.footerNavBox').css({'margin-left':'10%','margin-top':'3%'});
        $('.footerNavLine').hide();
        
    }else{
        $('.footerNav').css({width:''}).parent('.footerNavBox').css({'margin-left':'','margin-top':''});
        $('.footerNavLine').show();

        $('.fluidCenter').css({float:''})
        $('.fluidLeft').css({float:''})
        $('.fluidRight').css({float:''});
    }
    if(iWidth<450){
        console.log(iWidth/400*195)
        $('.meunList li').width(iWidth/400*195 + 30)
        $('.meunList li a').width(iWidth/400*195)
    }

})

// 小圆点
$('.toggleBox img').click(function(){
    $(this).toggleClass('avtiveShow').siblings().toggleClass('avtiveShow');
});
$('.meunB b').click(function(){
   index = $(this).index();
    $('.carouseImgs').stop().animate({left:index*-iWidth/2},500);
});


//dianji
$('.hideSerach b').click(function(){
    $(this).children().toggleClass('showHide');
    $('.hideListBox').slideToggle(500)
})
// 小三角
$('.meunList').eq(0).show();
$('.hideList1 li').click(function(){
    let smIndex = $(this).index()
    $(this).children('img').addClass('smsanjiao').end().siblings().children('img').removeClass('smsanjiao');
    $('.meunList').eq(smIndex).show().siblings('.meunList').hide();
});
//划过的时候让轮播图变化

$('.hideList li').mouseenter(function(){
    index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.carouseImgs').stop().animate({left:index*-iWidth},500);
});

//划过的时候让hideList显示
$('.carouselBox').hover(function(){
    $('.hideList').animate({height: '54px'},200);
},function(){
    $('.hideList').animate({height: '4px'},200);
});


//小轮播图
let num = 0;
$('.meunPrev').click(function(){
    num--;
   if(num < 0){ num = 0}
    $('.smCarouseImgs').animate({left: num*-108},300)
});
$('.meunNaxt').click(function(){
    num++;
   if(num > 17){ num = 0}
    $('.smCarouseImgs').animate({left: num*-108},300)
});

// search
$('.lastNav').click(function(ev){
    // stopPropagation();
    $('.hideSearchBox').toggle();
})
$('.hideSearchBox').click(function(){
    $('.hideSearchBox').css({display:"block"})
})
// function autoplay(){
//      times = setInterval(function(){
//         index++;

//         $('.carouseImgs').stop().animate({left:index*-iWidth/2},500);
//      },3000)
// }
