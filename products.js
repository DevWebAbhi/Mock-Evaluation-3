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
        const{name,sortDate_type,filter,page}=req.query;
        console.log(name,sortDate_type,filter,page)
    try {
            if(name && sortDate_type && filter && page){
                console.log(1);
                const model=await ProductModel.find({name:name,Category:filter}).skip(4*page).limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else if(name && sortDate_type && filter){
                const model=await ProductModel.find({name:name,Category:filter}).limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else if(name && sortDate_type){
                const model=await ProductModel.find({name:name}).limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else if(name && filter){
                const model=await ProductModel.find({name:name,Category:filter}).limit(4);
                res.send({token:"Done",Data:model});
            }else if (name && sortDate_type){
                const model=await ProductModel.find({name:name}).limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else if(sortDate_type && filter){
                const model=await ProductModel.find({Category:filter}).limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else if(sortDate_type && page){
                const model=await ProductModel.find({name:name}).skip(4*page).limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else if(name){
                const model=await ProductModel.find({name:name}).limit(4);
                res.send({token:"Done",Data:model});
            }else if(filter){
                const model=await ProductModel.find({Category:filter}).limit(4);
                res.send({token:"Done",Data:model});
            }else if(page){
                const model=await ProductModel.find().skip(4*page).limit(4);
                res.send({token:"Done",Data:model});
            }else if(sortDate_type){
                const model=await ProductModel.find().limit(4).sort({postedAt:sortDate_type==1?1:-1});
                res.send({token:"Done",Data:model});
            }else{
                const model=await ProductModel.find().limit(4);
                res.send({token:"Done",Data:model});
            }

       
    } catch (error) {
        console.log(error);
        res.send({msg:"Error occured",token:"NOT"});
    }
})

module.exports={
    routeProduct
}