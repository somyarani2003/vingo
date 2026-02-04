import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
    },
    category:{
        type:String,
        required:true,
        enum:[ "Snacks",
            "Main Course",
            "Desserts",
            "Pizza",
            "Burgers",
            "Sandwiches",
            "South Indian",
            "North Indian",
            "Chinese",
            "Fast Food",
            "Others"
        ]
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    foodType:{
        type:String,
        required:true,
        enum:["veg","non veg"]
    }
},{timestamps:true})

const Item = mongoose.model("Item",itemSchema)
export default Item