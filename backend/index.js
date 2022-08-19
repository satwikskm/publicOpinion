const express = require('express')

const {User,Post,sequelize} = require('./models')

const cors = require('cors')

const app = express()


const http = require('http')

const {Server} = require('socket.io')


const User = require('./db/models/user')

const mongo = require('./db/mongo/index')





app.use(express.json())

app.use(cors())


const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket)=>{
    console.log(`User connected on ${socket.id}`)
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.post('/create',async(req,res)=>{
    const {firstName,lastName,email,password}=req.body
    console.log(firstName,lastName,email,password)
    try {
        const user = await User.create({firstName,lastName,email,password})
        console.log(user,"user")
        res.send(user)
    } catch (error) {
        res.status(500).send({error:"data creation failed"})
    }
})

app.get('/user',async(req,res)=>{
    try {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        res.send(users)
    } catch (error) {
        res.send("error")
        
    }
})
app.get('/user/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
        const users = await User.findAll({where: {
            id: req.params.id
          }});
          console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        res.send(users)
        
    } catch (error) {
        res.send(error)
        
    }
})
app.post('/login',async(req,res)=>{
    console.log(req.body)
    const {email,password}=req.body
    try {
        const users = await User.findAll({where: {
            email: email,
            password:password
          }});
          console.log(users,"user")
         
         
          console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        let val=JSON.stringify(users, null, 2)
        console.log(val.length)
        if(val.length > 2){
            res.status(200).send(users[0])
        }
        else{
            res.status(200).send("Incorrect Credentials")
        }
       
        
    } catch (error) {
        console.log(error)
        res.status(404).send("Error")
        
    }
})

app.post('/post',async(req,res)=>{
    
    const {id,name,post} = req.body
    try {
        const post = await Post.create({id,name,post})
        console.log(post,"post")
        res.send(post)
    } catch (error) {
        res.status(500).send({error:"data creation failed"})
    }
})

app.post('/createUser',async(req,res)=>{
    const {firstName,lastName,email,password}=req.body
    
    console.log(req.body)
    console.log(firstName,lastName,email,password)
    const user = new User(
        {
            firstName: firstName,
            lastName:  lastName,
            email:  email,
            password:  password,
        }
        )
    console.log(user,"user")
    try {
        //const user = await User.create({firstName,lastName,email,password})
        
        
       const u1 = await user.save()
       console.log(u1,"result")
        res.send(u1)
    } catch (error) {
        res.status(500).send({error:"data creation failed"})
    }
})

*/----------------------  Mongo DB based Routes -----------------*/

app.get('/allUser',async(req,res)=>{
    const data=await User.find()
    res.send(data)

        
        
        // if(err){
        //     return res.status(400).send(err)
        // }
        // else{
        //     return res.status(200).send({user})
        // }
        
    });

    app.get('/existingUser/:id',async(req,res)=>{
        //console.log(req.params.id)
        const id = req.params.id.split(':')[1]
        console.log(id)
        try {
            // const users = await User.findAll({where: {
            //     id: req.params.id
            //   }});
            //   console.log(users.every(user => user instanceof User)); // true
            // console.log("All users:", JSON.stringify(users, null, 2));
            const data = await User.findOne({ _id: id })
            console.log(data,"data")
            res.send(data)
            //,(err,result)=>{
            //     if(err){
            //         console.log(err)
            //         res.status(300).send(err)
            //     }
            //     res.send(result)
            // })
            //res.send(users)
            
        } catch (error) {
            res.send(error)
            
        }
    })

    app.post('/login',async(req,res)=>{
        console.log(req.body)
        const {email,password}=req.body
        const data = await User.findOne({$and:[{email:email},{password:password }]})
        if(data){
            console.log(data,"data")
            res.send(data)
    
        }
        else{
            res.send("Incorrect")
        }

    })

app.listen(6000,async()=>{
    console.log("Server running at port 6000")
    await sequelize.authenticate()
  
})

