
const mongoose = require("mongoose")

require('dotenv').config()

console.log(process.env.USER)

mongoose.connect("mongodb://127.0.0.1:27017/publicOpinion",{
    useNewUrlParser: true, 
    useUnifiedTopology: true 


}).then(()=>{
    console.log("Mongodb Connected....")
}).catch((err)=>{
    console.log(err)
});


// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();
// const model = require('../models/user');
 
// Connecting to database
// const query = "mongodb://127.0.0.1:27017/publicOpinion"
// const db = (query);
// mongoose.Promise = global.Promise;
 
// mongoose.connect(db, { useNewUrlParser : true,
// useUnifiedTopology: true }, function(error) {
//     if (error) {
//         console.log("Error!" + error);
//     }
//     else{
//         console.log("connected")
//     }
// });
 
// module.exports = router;

// const createDoc = async() =>{
//     try {
//         const value = new mode({
//             firstName:"Satwik",
//             lastName:"Mohanty",
//             email:"skm@gl.com",
//             password:'12345'
            
//         })
//         const result = value.save()
//         console.log(result)
        
//     } catch (error) {
//         console.log(error)
        
//     }
    
// }


// const userSchema = mongoose.Schema({
    
//     firstName:{
//         type:String,
        
        

//     },
//     lastName:{
//         type:String,
        

//     },
//     email:{
//         type:String,
        
//     },
//     password:{
//         type:String
//     }


// })

// const model = new mongoose.model('User',userSchema,'user')


module.exports = mongoose


