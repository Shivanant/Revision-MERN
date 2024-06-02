import express from "express";
const app=express();
const port=3000

app.listen(port,()=>{
    console.log(`Server Running at port ${port}.`)
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
    console.log(req.rawHeaders)
})
app.get("/About",(req,res)=>{
    res.send("<h1>This is make by Shivanant Deo Bhagat!</h1>")
    console.log(req.rawHeaders)
})
app.get("/Contact",(req,res)=>{
    res.send("<h1>Contact Shvianant at linkdin!</h1>")
    console.log(req.rawHeaders)
})

// "endpoints" represent the messages to be delivered to specific destinations.
