var express = require('express');
var userinfos = require('../db/userinfos');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    userinfos.findAll({username:req.body.username,userpass:req.body.userpass},function(isSuccess){
      console.log(isSuccess)
      if(isSuccess){
        console.log(111)
        //保存session
        // req.session.username = req.body.username;
        //保存cookie
        // res.cookie("username",req.body.username);
        console.log(222)
        //跳转到首页
        res.redirect("index.html");
      }else{
        res.send("<script>alert('用户名或密码不正确，请重新登录');location.href='login.html'</script>")
      } 
    })
});

module.exports = router;
