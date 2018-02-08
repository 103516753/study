var express = require('express');
var goodsconment = require('../db/goodsconments');
var goodsinfos = require('../db/goodsinfos');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let goodsid = req.query.goodsid;


    let pageindex = req.query.pageindex;
    if(!pageindex){
        pageindex = 1
    }
    goodsinfos.findAll({"goodsid":goodsid},function(data){
        console.log( "data.goodsid:"+ data[0])
        goodsconment.findConments({"goodsid":goodsid},pageindex,function(arr,maxPage){
            res.render('goodsdetail', 
            { 
                "conments":arr,
                "maxPage": maxPage,
                "pageIndex":pageindex,
                goodsid:    data.goodsid,
                goodsname:  data.goodsname,
                goodsprice: data.goodsprice,
                goodsnum   :data.goodsnum,
            });
        })
    });
        
});

    // 获取前端数据
    // let comment = req.body.comment;
    // let username = req.session.username;
    // let time = new Date();

    // 添加
    // goodsconment.addConments({
    //                           goodsid:goodsid,
    //                           username:username,
    //                           comment:comment,
    //                           conmenttime :time,
    //                         },function(isSuccess){
    //                             if(isSuccess){
    //                               res.send("<script>alert('成功')</script>")
    //                             }else{
    //                               res.send("<script>alert('失败')</script>")
    //                             }
    //                         });
    
  

module.exports = router;
