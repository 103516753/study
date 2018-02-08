var express = require('express');
var router = express.Router();
var userinfos = require('../db/userinfos');

/* GET home page. */


// router.get('/', function(req, res, next) {
//     var username = req.query.username;

//     userinfos.findAll({username:req.query.username},function(isSuccess){
        
//         res.send(isSuccess)
//     })
// });

router.post('/', function(req, res, next) {
    var username = req.body.username;

    userinfos.findAll({username:username},function(isSuccess){
        
        res.send(isSuccess)
    })
});

module.exports = router;