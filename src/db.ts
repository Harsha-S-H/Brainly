
import mongoose, { Model,Schema } from "mongoose";
mongoose.connect("mongodb+srv://shharsha40:harsha123@dev.p91px.mongodb.net/brainly")
 const UserSchema= new Schema({
     username: { type: String, unique: true },
     password: String
 })

  export const UserModel=mongoose.model("User",UserSchema);

  const ContentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'} ],
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}
    
  })

  export const ContentModel=mongoose.model("Content",ContentSchema)