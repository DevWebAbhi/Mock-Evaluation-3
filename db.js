const mongoose = require("mongoose");

const productSchema=mongoose.Schema({
    name: {type:String,required:true},
		description :{type:String,required:true},
		category :{type:String,enum:["clothing", "electronics", "furniture", "other"],required:true},
		image : {type:String,required:true},
		location : {type:String,required:true},
		postedAt : {type:String,required:true},
		price : {type:Number,required:true}
});

const ProductModel=mongoose.model("products",productSchema);

const connect =mongoose.connect("mongodb+srv://tiwariabhishek889912:mongoatlas@cluster0.4l96aoa.mongodb.net/");

module.exports={
    connect,ProductModel
}