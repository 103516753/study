
// 点击改变购物车数量
let iNum = 0;
let oThat = null;
// 小计
let subtotal = null;
 // 总价格
aggregate = 0;

// // 价格小计
// subtotal = 
$('.priceAll span').html()
$('.addNum').click(function(){
    iNum = $(this).siblings('input').val();
    iNum++;
    $(this).siblings('input').val(iNum);

    
    // 价格小计
    subtotal = iNum * $(this).parent().siblings('.cartprice').find('span').html();
    $(this).parent().siblings('.priceAll').find('span').html(subtotal);

    // 总价格
    aggregate = 0;
    $('.priceAll span').each(function(k,v){
        // console.log($(v).html())
        aggregate  =  Number(aggregate)  + Number($(v).html());

        $('.price1 label b').html(aggregate + '.00')
        $('.priceOne').html(aggregate - $('.priceCoupon').html() - $('.price3Coupon').html() + '.00')
    });
    console.log(aggregate)
})

$('.mNum').click(function(){
    iNum = $(this).siblings('input').val();
    iNum--;

    if(iNum == 0){
        $('.deleteGoods').show();
        oThat = $(this);

    }else{
        $(this).siblings('input').val(iNum);

        // 价格小计
        subtotal = iNum * $(this).parent().siblings('.cartprice').find('span').html();
        $(this).parent().siblings('.priceAll').find('span').html(subtotal);
        console.log(subtotal)
    }
    
});


// 删除goods
$('.deleteTrue').click(function(){
    oThat.parent().parent().remove();
    $('.deleteGoods').hide();
});

//点击关闭删除
$('.deleteFalse').click(function(){
    $('.deleteGoods').hide();
});
$('.closeMeun').click(function(){
    $('.deleteGoods').hide();
});

//点击右边删除字
$('.deleteBox').click(function(){
    $('.deleteGoods').show();
    oThat = $(this)
});

// 使用优惠券
$('.discountCoupon b').click(function(){
    $('.discountCouponList').show();
});

//选择优惠券
$('.discountCouponList li').click(function(){
    $('.discountCoupon input').val($(this).data('cartid'));
    $('.discountCouponList').hide();
    $('.discountCoupon label').html('取消').css({'background-color': 'rgb(109, 157, 3)'})

    $('.price3 label span').html($(this).data('discountcoupon'));

    // 总价格
    $('.priceOne').html(aggregate - $(this).data('discountcoupon'));
});

// 点击取消优惠券
$('.discountCoupon label').click(function(){
    $('.discountCoupon input').val('--请选择或输入优惠券号--');
    $(this).html('确定').css({'background-color': '#f60'})
});



