var mongoose = require('mongoose')
let db = mongoose.createConnection('10.35.165.227','password');
        
console.log('开始添加数据');

// 定义一个模板
var regSchema = new mongoose.Schema({
    goodsid:     String,    
    username:    String,
    conment:     String,
    conmenttime: String,
});

// 将模板发布为model
var regModel = db.model('goodsconments',regSchema);

// 建立数据库连接
module.exports = {
    
    findConments:function(condition,pageindex,callback){
        // const mongoose = require('mongoose');
    
        //3）、查询
        regModel.find(condition).count(function(err1,counts){
            if(err1){
                console.log(err1)
            }else{
                regModel.find(condition,function(err,data){
                    console.log('数据库99'+counts)                
                    console.log("数据库查询出来的数据："+data);
                    callback(data,counts);   
                }).skip((pageindex-1)*1).limit(1);
            }
        });
    },


    addConments:function(condition,callback){
        console.log(condition.username)
         //new
         entity = new regModel({
            goodsid:     condition.goodsid,
            username:    condition.username,
            conment:     condition.conment,
            conmenttime: condition.conmenttime,
            
        });
    
        // 添加
        entity.save(function(err,data){
            if(err){
                console.log(err)
            }else{
                console.log(data);
                callback(true)
            }
        });
    }
}