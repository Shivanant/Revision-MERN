import express from "express"

const app=express()
const port=3000


var d =new Date()
var ans= d.getDay()

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(days[ans])

app.get("/",(req,res)=>{
    if(ans===0 || ans==6){
        res.render("index.ejs",
            {day:days[ans]}
        )
    }else{
        res.render("index.ejs",
            {day:days[ans]}
        )

    }
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})