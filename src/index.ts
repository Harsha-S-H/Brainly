import express from "express";
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { contentmiddleware } from "./middleware";
import { ContentModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config";

const app=express();
app.use(express.json())

app.post("/api/v1/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password
    try{
    await UserModel.create({
        username,
        password
    })
    res.json("signup sucessfull")
}
    catch(e){

    res.status(411).json("signup unsuccessfull",)
    }
}) 

app.post("/api/v1/signin",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password
    const existinguser=await UserModel.findOne({
        username:username,
        password:password
    })
    if(existinguser){
        const token=jwt.sign({
            id:existinguser._id
        },JWT_PASSWORD)
        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message:"Wrong Credentials"
        })
    }
    
}) 

app.post("/api/v1/content",contentmiddleware ,async(req,res)=>{
    const link=req.body.link;
    const type=req.body.type;
    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.json("content added")

}) 

app.get("/api/v1/content",contentmiddleware,async(req,res)=>{
    //@ts-ignore
    const userId=req.userId;
    const content=await ContentModel.findOne({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })

    
}) 
app.delete("/api/v1/content",contentmiddleware,async(req,res)=>{
    //@ts-ignore
   const contentId=req.body.contentId;
   await ContentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId:req.userId
   })
   res.json(
    "content deleted"
   )

    
}) 

app.post(" /api/v1/brain/share",(req,res)=>{
    
}) 

app.get(" /api/v1/brain/:shareLink",(req,res)=>{
    
}) 
async function main(){
    await mongoose.connect(
    "mongodb+srv://shharsha40:harsha123@dev.p91px.mongodb.net/brainly"
    );
    
    app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
    });
}
main()