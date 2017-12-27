var express = require('express');
var userinfos = require('../db/userinfos');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    userinfos.findAll({username:req.body.username},function(isSuccess){
      console.log(isSuccess)
      if(isSuccess){
        res.send("<script>alert('用户名已存在');location.href='register.html'</script>")
      }else{
        console.log(8888);
        userinfos.add(req.body,function(){
          console.log(222)
          res.send("<script>alert('注册成功');location.href='login.html'</script>")
          console.log(333)
        })
      } 
    })
});

module.exports = router;
