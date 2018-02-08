var express = require('express');
var router = express.Router();
var goodsconment = require('../db/goodsconments');

router.post('/', function(req, res, next) {
    //1、接收前端传来数据
    let goodsid = req.body.goodsid;
    let conment = req.body.conment;
    let username = req.session.username;
    // let username = "哈哈哈";
    let d = new Date();

    console.log("啥地方"+req.session.username)
    //2、保存到数据库中。
    goodsconment.addConments({
        "goodsid":goodsid,
        "username":username,
        "conment":conment,
        conmenttime :d
    },function (isSuccess) {
        if(isSuccess){
            console.log("成功！");
            res.redirect("goodsdetail?goodsid="+goodsid);
        }else{
            console.log("失败！");
        }
    });
});

module.exports = router;