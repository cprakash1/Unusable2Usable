const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const usableSchema=new Schema({
    body:String,
    costOffered:Number,
    buyer:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports=mongoose.model("Usable",usableSchema);