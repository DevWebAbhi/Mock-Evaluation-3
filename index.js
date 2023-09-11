const express=require("express");
const app=express();
const {connect} =require("./db");
const { routeProduct}=require("./products");
var cors = require('cors')
require("dotenv").config();
const PORT=process.env.PORT;
app.use(cors())
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({msg:"Welcome to olx clone backend"});
})

app.use("/products",routeProduct);

app.get("*",(req,res)=>{
    res.send({msg:"Bad Request"});
})

app.post("*",(req,res)=>{
    res.send({msg:"Bad Request"});
})

app.put("*",(req,res)=>{
    res.send({msg:"Bad Request"});
})

app.delete("*",(req,res)=>{
    res.send({msg:"Bad Request"});
})


app.listen(PORT,async()=>{
    try {
        await connect;
        console.log("connect");
    } catch (error) {
        console.log(error);
        
    }
})