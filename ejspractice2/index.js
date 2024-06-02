import express from "express"


const app=express()
const port=3000

app.get('/',(req,res)=>{
    const data={
        title:"Title :Learning EJS",
        seconds: new Date().getSeconds(),
        items:["apple","banana","grapes","somefruit"],
        htmlcontent:"<h1>this is some html content</h1>"

    };
    res.render('index.ejs',data)
    
})


app.listen(port,()=>{
    console.log(`Server Listening at ${port}`)
})