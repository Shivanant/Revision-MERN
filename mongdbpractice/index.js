import express from "express";
import mongoose from "mongoose";
import { Employee } from "./model/employee.js";
import bodyParser from "body-parser";

const app=express()
const port=3000

app.use(bodyParser.urlencoded({extended:true}))

const db= await mongoose.connect('mongodb://localhost:27017/mdp')

const name=['harry','shiva','raju','shamu','sun','thapa']
const language=['hindi','english','bihari','german','python']
const city=['delhi','agra','lucknow','aligarh']


app.get('/',(req,res)=>{
    res.render('index.ejs')

    

})
app.post('/submit',async (req,res)=>{
    switch (req.body["choise"]) {
        case 'gen':
            console.log(req.body["choise"]);
            let employee=await Employee({
                name:name[Math.floor(Math.random()*name.length)],
                language:language[Math.floor(Math.random()*language.length)],
                city:city[Math.floor(Math.random()*city.length)],
                salary:Math.floor(Math.random()*100000),
                isManager:false
            })

            employee.save()
            
            break;
        case 'del':
            console.log(req.body["choise"]);
            await Employee.deleteMany();
            
            break;
    
        default:
            break;
    }
    res.redirect('/')
    
})


app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})