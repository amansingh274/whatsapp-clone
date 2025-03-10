const express = require ("express");
 const app= express();
 const mongoose = require('mongoose');
   const path =require("path");
  const Chat = require("./models/chat")
  const methodoverride= require("method-override");
 
   app.set("views",path.join(__dirname,"views"));
   app.set("view engine" ,"ejs");
   app.use(express.static(path.join(__dirname,"public")));
   app.use (express.urlencoded({extended:true}));
   app.use(methodoverride("_method"));
   

 
   main()
   .then(()=>{
       console.log("connection successful")
   })
   .catch((err)=> console.log(err));
   
   async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
   };
      // index route
   app.get("/chat", async(req,res)=>{
      let chats= await Chat.find();
      console.log(chats);
      res.render('chats',{chats })
   })
    //new route
    app.get("/chat/new",(req,res)=>{
     res.render("new")
    })

    //post route
    app.post("/chat",(req,res)=>{
     let {from , msg, to}=req.body;
     let newChat= new Chat ({
        from: from,
        msg:msg,
        to:to,
        created_at:new Date(),
     });

     newChat
     .save()
     .then((res)=>{
        console.log("new chat created ")
     }).catch((err)=>{
        console.log(err)
     });

     res.redirect("/chat");
    });

    app.get("/chat/:id/edit", async(req,res)=>{
      let {id}=req.params;
      let chat= await Chat.findById(id);
      res.render("edit",{chat});
    });
    //edit route
    app.put("/chat/:id", async(req,res)=>{
        let{id}=req.params;
        let{ msg: newMsg}=req.body;
        let updateChat= await Chat.findByIdAndUpdate(id, {msg:newMsg},
        {runValidators:true,
        new :true})
    })

  app.get("/",(req,res)=>{
     res.send("root is working")
  })
 app.listen(8080,()=>{
     console.log("port is listening")
 });