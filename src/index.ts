import express from "express";
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { UserModel } from "./db";

const app=express();
app.use(express.json())

app.post("/api/v1/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password

    await UserModel.create({
        username,
        password
    })

    res.json("signup successfull",)

}) 

app.post("/api/v1/signin",(req,res)=>{
    
}) 

app.get("/api/v1/content",(req,res)=>{
    
}) 

app.delete("/api/v1/content",(req,res)=>{
    
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