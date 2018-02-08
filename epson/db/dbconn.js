var mongoose = require('mongoose')
module.exports = {
    db:function(){
        return mongoose.createConnection('10.35.165.227','password')
    }
}