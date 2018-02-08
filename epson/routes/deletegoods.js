var express = require('express');
var router = express.Router();
var goodsinfos = require('../db/goodsinfos');

/* GET home page. */
router.post('/', function(req, res, next) {
    var goodsid    = req.body.goodsid;    
    var goodsname  = req.body.goodsname; 

    // 删除货物
  console.log("这是删除的数据" + goodsid,goodsname)
    goodsinfos.delete({
        goodsid:   goodsid,
        goodsname: goodsname
    },function(isSuccess){
        if(isSuccess){
            res.end('<script>alert("删除成功");location.href="supervisorySystem.html"</script>')
        }else{
            res.end('<script>alert("删除失败，请重新删除");location.href="supervisorySystem.html"</script>')
        }
    })

    
});

module.exports = router;