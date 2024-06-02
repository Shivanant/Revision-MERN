import mongoose from "mongoose";

const EmployeSchema= new mongoose.Schema({
    name:String,
    salary: Number,
    city:String,
    language:String,
    isManager:Boolean

})

export const Employee= mongoose.model("Employee",EmployeSchema);