import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/todo.js"

const app =express()
let db  =await mongoose.connect('mongodb://localhost:27017/company')
const port=3000

 app.get('/',(req,res)=>{
    res.send("mongodb Roxx")
    const todo1=new Todo({name:'shivanant',title:'mongoosei',isDone:true})
    todo1.save()

 })

app.listen(port,()=>{
    console.log(`server runinng at ${port}`)
})  