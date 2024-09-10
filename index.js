const express=require('express');
const app=express();
const user=require('./routes/user')

app.use(user)

app.listen(3000,(err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("server is running on 3000")
    }
})

//localhost:3000/user/13