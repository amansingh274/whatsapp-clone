const mongoose = require('mongoose');
const Chat = require("./models/chat")

   main()
   .then(()=>{
       console.log("connection successful")
   })
   .catch((err)=> console.log(err));
   
   async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
   };

   let Allchat = [{
    from:"aman",
    to:"Ankit",
    msg:"send me your exam sheet ",
    created_at:new Date(),
  },
  {
  from:"priyanshu",
    to:"aman",
    msg:"send me your number ",
    created_at:new Date(),
  },

  {
    from:"ayush",
      to:"Ankit",
      msg:"send me your markesheet ",
      created_at:new Date(),
    },

     {
        from:"aman",
          to:"Ankit",
          msg:"send me your biobata ",
          created_at:new Date(),
        }
];
Chat.insertMany(Allchat);