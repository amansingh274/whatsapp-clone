// const mongoose = require('mongoose');

// const chatSchema= new mongoose({
//     from:{
//         type:string,
//         require:true,
//     },
//     to:{
//         type:string,
//         require:true,
//     },
//     msg:{
//         type:string ,
//         maxLength:50,
//     },
//     created_at:{
//         type:Date,
//         require:true,
//     }
// })

// const Chat=model("Chat",chatSchema)
//  module.exports=Chat;

//  const express = require ("express");
//  const app= express();
//  const mongoose = require('mongoose');
//    const path =require("path");
//  const Chat= require("./models./chat.js")
 
//    app.set("views",path.join(__dirname,"views"))
//    app.set("views engine" ,"ejs")
 
//    main()
//    .then(()=>{
//        console.log("connection successful")
//    })
//    .catch((err)=> console.log(err));
   
//    async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
//    };
 
//    let chat1 = new Chat({
//      from:"aman",
//      to:"Ankit",
//      msg:"send me your exam sheet ",
//      created_at:new Date(),
//    });
//    chat1.save().then((res)=>{
//      console.log(res);
//    });
 
//   app.get("/",(req,res)=>{
//      res.send("root is working")
//   })
//  app.listen(8080,()=>{
//      console.log("port is listening")
//  });