var mongoose = require('mongoose')
let db = mongoose.createConnection('10.35.165.227','password');
        
console.log('开始添加数据');

// 定义一个模板
var regSchema = new mongoose.Schema({
    goodsid:        String,
    goodsname:      String,
    goodsprice:     Number,
    goodsnum:       Number,
    goodsconment:   String,

});

// 将模板发布为model
var regModel = db.model('goodsinfos',regSchema);

// 建立数据库连接
module.exports = {
    
    findAll:function(condition,callback){
        const mongoose = require('mongoose');
       
    
        //3）、查询
        regModel.find(condition,function(err,data){
            if(err){
                console.log(err);
            }else{
                callback(data[0]);
                
            }
        });
    },


    add:function(condition,callback){
         //new
         entity = new regModel({
            goodsid:        condition.goodsid,
            goodsname:      condition.goodsname,
            goodsprice:     condition.goodsprice,
            goodsnum:       condition.goodsnum,
            goodsintroduce: condition.goodsintroduce,
        });
    
        // 添加
        entity.save(function(err,data){
            if(err){
                console.log(err);
                callback(false)
            }else{
                console.log(data);
                callback(true)
            }
        });
    },


    // 删除
    delete:function(condition,callback){
        regModel.deleteOne(condition,function(err,data){
            console.log(condition.goodsid+"哇哈哈")
            if(err){
                console.log("这是错误" + err);
                callback(false);
            }else{
                console.log(data+"这是data")
                callback(true);
                
            }
        });
    }
}
