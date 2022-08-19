const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    
        firstName:{
            type:String,
            
            

        },
        lastName:{
            type:String,
            

        },
        email:{
            type:String,
            
        },
        password:{
            type:String
        }

    
})

const model = new mongoose.model('User',userSchema,'user')


module.exports = model