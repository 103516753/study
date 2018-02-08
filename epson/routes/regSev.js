var express = require('express');
var userinfos = require('../db/userinfos');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    
    userinfos.findAll({username:req.body.username},function(isSuccess){
      console.log(isSuccess)
      if(isSuccess){
        res.send("<script>alert('用户名已存在');location.href='register.html'</script>")
      }else{
       
        userinfos.add(req.body,function(){
         
          res.send("<script>alert('注册成功');location.href='login.html'</script>")
         
        })
      } 
    })
});

module.exports = router;
