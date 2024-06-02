import express from "express"
import morgan from "morgan"

const app=express()
const port=3000

const logger=(req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    next()

}

app.use(logger)

app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(port,()=>{
    console.log(`Listening on port :${port}`)
})