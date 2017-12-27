var mongoose = require('mongoose')
let db = mongoose.createConnection('10.35.167.85','password');
        
console.log('开始添加数据');

// 定义一个模板
var regSchema = new mongoose.Schema({
    username: String,
    userpass: String,
});

// 将模板发布为model
var regModel = db.model('passwords',regSchema);

// 建立数据库连接
module.exports = {
    
    findAll:function(condition,callback){
        const mongoose = require('mongoose');
       
    
        //3）、查询
        regModel.find(condition,function(err,data){
            console.log(data.length)
            if(err){
                console.log(err);
            }else{
                if(data.length==1){
                    callback(true);
                    console.log(data)
                }else{
                    callback(false);
                }
                
            }
        });
    },


    add:function(condition,callback){
        console.log(condition.username)
         //new
         entity = new regModel({
            username:condition.username,
            userpass:condition.userpass,
        });
    
        // 添加
        entity.save(function(err,data){
            if(err){
                console.log(err)
            }else{
                console.log(data);
                callback()
            }
        });
    }
}
