const express =require("express");
const routeProduct=express.Router();
const {ProductModel} =require("./db");

routeProduct.post("/post",async(req,res)=>{
try {
  const model=  await ProductModel({
        ...req.body
    });
    model.save();
    console.log("Done");
    res.send({msg:"Sucessfully Posted",token:"POST"});
} catch (error) {
    console.log(error);
    res.send({msg:"Error occured",token:"NOT"});
}
})


routeProduct.get("/get",async(req,res)=>{

    try {
        const model=await ProductModel.find();
        res.send({token:"Done",Data:model});
    } catch (error) {
        console.log(error);
        res.send({msg:"Error occured",token:"NOT"});
    }
})

module.exports={
    routeProduct
}